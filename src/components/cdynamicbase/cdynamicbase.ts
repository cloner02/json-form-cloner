import { PREFIXMESSAGE } from '../../constants/index'
import { handlerProperty } from '../../decorators/property'
import { CBase } from '../cbase/cbase'
import handlers from './handler/index'
import { type IDynamicBaseProperties } from './type/index'

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

  changeStyleToError (): void {
    this.shadowRoot?.querySelector('.elementwrapper')?.classList.add('error')
    const iconError = this.shadowRoot?.querySelector('.icon-error') as unknown as HTMLElement
    if (iconError !== null) {
      iconError.style.display = 'block'
    }
  }

  removeStyleError (): void {
    this.shadowRoot?.querySelector('.elementwrapper')?.classList.remove('error')
    const iconError = this.shadowRoot?.querySelector('.icon-error') as unknown as HTMLElement
    if (iconError !== null) {
      iconError.style.display = 'none'
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
    if (message === undefined || message === null || message === '') {
      this.removeStyleError()
    }
  }

  getMessageError (message?: string): string | null {
    return message ?? null
  }
}
