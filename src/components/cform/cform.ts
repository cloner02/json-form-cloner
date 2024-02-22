import { CBase, type IBaseProperties } from '../cbase/cbase'
import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'

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
    return `${template}`
  }

  css (): string {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    return `${style}`
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    console.log('attributeChangedCallback')
  }
}

customElements.define('c-form', CForm)

declare global {
  interface HTMLElementTagNameMap {
    'c-form': CForm
  }
}
