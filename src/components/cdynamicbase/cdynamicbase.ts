import { PREFIXMESSAGE } from '../../constants/index'
import { CBase } from '../cbase/cbase'
import handlers from './handler/index'
import { type IDynamicBaseProperties } from './type/index'

export abstract class CDynamicBase extends CBase implements IDynamicBaseProperties {
  protected _value: any

  get value (): any {
    return this._value
  }

  set value (newValue: any) {
    const oldValue = this._value
    if (oldValue !== newValue) {
      this._value = newValue
      void this.propertyChangedCallback('value', oldValue, newValue)
    }
  }

  static observedAttributes = ['value']

  constructor (value: any, elementId: string, label?: string) {
    super(elementId, label)
    this.value = value
  }

  applyAttributesToProperties (): void {
    super.applyAttributesToProperties()
  }

  connectedCallback (): void {
    super.connectedCallback()
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    if (handlers[name] !== undefined && oldValue !== newValue) {
      handlers[name]({ element: this, name, newValue, oldValue })
    }
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)

    if (handlers[name] !== undefined && oldValue !== newValue) {
      handlers[name]({ element: this, name, newValue, oldValue })
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
}
