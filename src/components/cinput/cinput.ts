import { PREFIXMESSAGE } from '../../constants/index'
import { CBase } from '../cbase/cbase'
import { type ITypeInput, type IPropertiesInput } from './type/index'

export class CInput extends CBase implements IPropertiesInput {
  typeInput: ITypeInput
  private _inputElement: HTMLInputElement

  constructor (value: any, elementId: string, label: string, typeInput: ITypeInput) {
    super(value, elementId, label)
    this._inputElement = null as unknown as HTMLInputElement
    this.typeInput = typeInput
  }

  updateValue (event: Event): void {
    const target = event.target as HTMLInputElement
    this.value = target.value
  }

  inputEvent (): void {
    this._inputElement.addEventListener('input', this.updateValue.bind(this))
  }

  onBlurEvent (): void {
    this._inputElement.addEventListener('blur', (event: FocusEvent) => {
      super.showValidationMessage('event')
    })
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._inputElement = this.shadowRoot?.querySelector('input') as Element as HTMLInputElement
    this.inputEvent()
    this.onBlurEvent()
  }

  async propertyChangedCallback (name: string, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)
    if (name === 'value') {
      this._inputElement.value = newValue
    }
  }

  htmlwrapper (): string {
    return `
      <div>
        <label for='${this.elementId}'>${this.label}</label>
        ${this.typeInput.html(this.value, this.elementId, this.label)}
        <span id="${PREFIXMESSAGE}${this.elementId}"></span>
      </div>
    `
  }

  html (): string {
    return this.htmlwrapper()
  }

  css (): string {
    return ''
  }
}

customElements.define('c-input', CInput)

declare global {
  interface HTMLElementTagNameMap {
    'c-input': CInput
  }
}
