import { CBase, type IBaseProperties } from '../cbase/cbase'

interface IPropertiesForm extends IBaseProperties {
  bodyjson: string
}

export class CForm extends CBase implements IPropertiesForm {
  bodyjson: string
  static observedAttributes = ['value', 'bodyjson']
  constructor () {
    super()
    this.bodyjson = '{}'
  }

  html (): string {
    return `<form>${this.bodyjson}</form>`
  }

  css (): string {
    return `
              form {
                color: blue;
              }
              `
  }

  connectedCallback (): void {
    this.bodyjson = this.getAttribute('bodyjson') ?? this.bodyjson
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

customElements.define('c-form', CForm)

declare global {
  interface HTMLElementTagNameMap {
    'c-form': CForm
  }
}
