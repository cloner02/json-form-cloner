import { CBase } from '../cbase/cbase'
import { type ITypeInput, type IPropertiesInput } from './type/index'

export class CInput extends CBase implements IPropertiesInput {
  typeInput: ITypeInput
  private _inputElement: HTMLInputElement
  constructor (value: string, typeInput: ITypeInput) {
    super()
    this._inputElement = document.createElement('input')
    this.value = value
    this.typeInput = typeInput
  }

  updateValue (event: Event): void {
    console.log('updateValue', event)
    const target = event.target as HTMLInputElement
    this.value = target.value
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._inputElement = this.shadowRoot?.querySelector('input') as Node as HTMLInputElement

    this._inputElement.addEventListener('input', (event: Event) => { this.updateValue(event) })
  }

  disconnectedCallback (): void {
    super.disconnectedCallback()
    this._inputElement.addEventListener('input', (event: Event) => { this.updateValue(event) })
  }

  html (): string {
    return this.typeInput.html(this.value)
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
