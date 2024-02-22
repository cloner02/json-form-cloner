import { CBase } from '../cbase/cbase'
import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'
import { type IPropertiesForm } from './type/index'

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
}

customElements.define('c-form', CForm)

declare global {
  interface HTMLElementTagNameMap {
    'c-form': CForm
  }
}
