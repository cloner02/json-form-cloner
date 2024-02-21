import { CBase, type IBaseProperties } from '../cbase/cbase'
import { type ITypeInput } from './type/index'

interface IPropertiesInput extends IBaseProperties {
  typeInput: ITypeInput
}

export class CInput extends CBase implements IPropertiesInput {
  typeInput: ITypeInput
  constructor (value: string, typeInput: ITypeInput) {
    super()
    this.value = value
    this.typeInput = typeInput
  }

  template (): HTMLTemplateElement {
    const template = document.createElement('template')
    template.innerHTML = this.typeInput.template(this.value)
    return template
  }

  connectedCallback (): void {
    this.render()
  }

  adoptedCallback (): void {
    console.log('adoptedCallback')
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    console.log('attributeChangedCallback')
  }

  render (): void {
    super.render()
  }
}

customElements.define('c-input', CInput)

declare global {
  interface HTMLElementTagNameMap {
    'c-input': CInput
  }
}
