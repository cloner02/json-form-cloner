import { PREFIXMESSAGE } from '../../constants/index'
import { valueChangedEvent } from '../../events/index'
import { CBase } from '../cbase/cbase'
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
    this.label = label ?? ''
    this.value = value
  }

  applyAttributesToProperties (): void {
    super.applyAttributesToProperties()
  }

  connectedCallback (): void {
    super.connectedCallback()
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    if (name === 'value') {
      this.value = newValue
      this.dispatchEvent(valueChangedEvent({
        name,
        newValue,
        oldValue,
        elementId: this.elementId
      }))
    }
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)
    if (name === 'value') {
      this.value = newValue
      this.dispatchEvent(valueChangedEvent({
        name,
        newValue,
        oldValue,
        elementId: this.elementId
      }))
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
