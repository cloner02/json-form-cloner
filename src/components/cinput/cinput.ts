import { CBase } from '../cbase/cbase'
import { type ITypeInput, type IPropertiesInput } from './type/index'

export class CInput extends CBase implements IPropertiesInput {
  typeInput: ITypeInput
  private _inputElement: HTMLInputElement
  constructor (value: any, id: string, label: string, typeInput: ITypeInput) {
    super(value, id, label)
    this._inputElement = document.createElement('input')
    this.typeInput = typeInput
  }

  updateValue (event: Event): void {
    const target = event.target as HTMLInputElement
    this.value = target.value
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._inputElement = this.shadowRoot?.querySelector('input') as Element as HTMLInputElement

    this._inputElement.addEventListener('input', (event: Event) => { this.updateValue(event) })
  }

  html (): string {
    return this.typeInput.html(this.value, this.id, this.label)
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
