import { CBase } from '../cbase/cbase'
import { type ITypeInput, type IPropertiesInput } from './type/index'

export class CInput extends CBase implements IPropertiesInput {
  typeInput: ITypeInput
  constructor (value: string, typeInput: ITypeInput) {
    super()
    this.value = value
    this.typeInput = typeInput
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
