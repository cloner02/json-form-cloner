import { PREFIXMESSAGE } from '../../constants/index'
import { handlerProperty } from '../../decorators/property'
import { CBase } from '../cbase/cbase'
import { STATUS_ENUM } from './enum/index'
import handlers from './handler/index'
import { type IStatusIcon, type IDynamicBaseProperties, type IMessagesForm } from './type/index'

export abstract class CDynamicBase extends CBase implements IDynamicBaseProperties {
  protected _value: any

  @handlerProperty
    value: any

  static observedAttributes = ['value']

  constructor (value: any, elementId: string, label?: string) {
    super(elementId, label)
    if (value !== undefined) { this.value = value }
  }

  applyAttributesToProperties (): void {
    super.applyAttributesToProperties()
  }

  connectedCallback (): void {
    super.connectedCallback()
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)

    if (handlers[name] !== undefined && oldValue !== newValue) {
      handlers[name]({ element: this, name, newValue, oldValue })
    }
  }

  changeStyleToStatus (status?: IStatusIcon | null): void {
    this.removeStyleStatus()
    status = status ?? this.getStatus()?.status ?? STATUS_ENUM.SUCCESS
    this.shadowRoot?.querySelector('.elementwrapper')?.classList.add(status.name)
    const iconError = this.shadowRoot?.querySelector('.icon-status') as unknown as HTMLElement
    if (iconError !== null) {
      iconError.style.display = 'block'
      iconError.innerHTML = status.icon
    }
  }

  removeStyleStatus (): void {
    const elementWrapper = this.shadowRoot?.querySelector('.elementwrapper') as unknown as HTMLElement

    for (const key in STATUS_ENUM) {
      elementWrapper.classList.remove(STATUS_ENUM[key].name)
    }
    const iconError = this.shadowRoot?.querySelector('.icon-status') as unknown as HTMLElement
    if (iconError !== null) {
      iconError.style.display = 'none'
      iconError.innerHTML = ''
    }
  }

  render (): void {
    super.render()
  }

  showValidationMessage (message?: string): void {
    const msgElement = this.shadowRoot?.querySelector(`#${PREFIXMESSAGE}${this.elementId}`)
    if (msgElement !== undefined && msgElement !== null) {
      msgElement.innerHTML = message ?? ''
    }
  }

  getMessageError (message?: string): string | null {
    return message ?? null
  }

  getStatus (): IMessagesForm | null {
    let status: IMessagesForm | null = null
    if ('mandatory' in this) {
      const messageError = this.getMessageError(undefined)
      const elementStatus = (messageError === null)
        ? STATUS_ENUM.SUCCESS
        : (messageError !== null && this.mandatory as boolean) ? STATUS_ENUM.ERROR : STATUS_ENUM.WARNING
      status = {
        status: elementStatus,
        message: messageError
      }
    }
    return status
  }
}
