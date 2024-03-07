import { CBase } from '../cbase/cbase'
import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'
import { type IPropertiesForm } from './type/index'
import { Utils } from '../../decorators/utils'

@Utils()
export class CForm extends CBase implements IPropertiesForm {
  bodyjson: string

  static observedAttributes = ['value', 'bodyjson']
  constructor (value: any, id: string) {
    super(value, id)
    this.bodyjson = '{}'
  }

  html (): string {
    return `${template}`
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    if (name === 'bodyjson') {
      this.renderBodyjson(newValue)
    }
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
