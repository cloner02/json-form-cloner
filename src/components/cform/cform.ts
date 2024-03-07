import { CBase } from '../cbase/cbase'
import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'
import { type IPropertiesForm } from './type/index'
import { Utils } from '../../decorators/utils'

@Utils()
export class CForm extends CBase implements IPropertiesForm {
  bodyjson: string
  private _form: HTMLFormElement
  private _isConnected: boolean = false

  static observedAttributes = ['value', 'bodyjson']
  constructor (value: any, elementId: string) {
    super(value, elementId)
    this._form = null as unknown as HTMLFormElement
    // this._form = document.createElement('form')
    // this.shadowRoot?.appendChild(this._form)
    this.bodyjson = '{}'
  }

  html (): string {
    return `${template}`
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._form = this.shadowRoot?.querySelector('form') as Element as HTMLFormElement
    this._isConnected = true
    this.renderBodyjson(this.bodyjson)
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    if (name === 'bodyjson' && this._isConnected) {
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
