import { CBase } from '../cbase/cbase'
import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'
import { type IPropertiesForm } from './type/index'
import { Utils } from '../../decorators/utils'
import FormsCollection from '../../singleton/index'
import { VALUECHANGEDEVENT } from '../../constants/index'

@Utils()
export class CForm extends CBase implements IPropertiesForm {
  bodyjson: string
  private _form: HTMLFormElement
  private _isConnected: boolean = false

  static observedAttributes = ['value', 'bodyjson']
  constructor (value: object, elementId: string) {
    super(value, elementId)
    this.value = value ?? {}
    this._form = null as unknown as HTMLFormElement
    this.bodyjson = '{}'
    FormsCollection.put(this)
  }

  html (): string {
    return `${template}`
  }

  values (): void {
    this._form.childNodes.forEach((element: ChildNode) => {
      if (element instanceof CBase) {
        this.value[element.elementId] = element.value

        element.addEventListener(VALUECHANGEDEVENT, (event: Event) => {
          const payload = (event as CustomEvent).detail.payload
          const elementIdSource = payload.elementId
          const valueSource = payload.newValue
          this.value[elementIdSource] = valueSource
          console.log('event', event)
          console.log('valueForm', this.value)
        })
      }
    })
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._form = this.shadowRoot?.querySelector('form') as Element as HTMLFormElement
    this._isConnected = true
    this.renderBodyjson(this.bodyjson)
    this.values()
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
