import { CBase, type IBaseProperties } from '../cbase/cbase'
import style from './../../style/cForm/style.css'

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
    console.log(style)
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    return `${style}`
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
