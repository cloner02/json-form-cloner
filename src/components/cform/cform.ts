import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'
import { type IPropertiesForm } from './type/index'
import { Utils } from '../../decorators/utils'
import FormsCollection from '../../singleton/formsCollection'
import { VALUECHANGEDEVENT } from '../../constants/index'
import { CDynamicBase } from '../cstaticbase/cstaticbase'
import handlers from './handler/index'

@Utils()
export class CForm extends CDynamicBase implements IPropertiesForm {
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

  setValuesToChildren (): void {
    this.childNodes?.forEach((element: ChildNode) => {
      if (element instanceof CDynamicBase) {
        if (element.value !== String(this.value[element.elementId])) {
          element.value = this.value[element.elementId]
        }
      }
    })
  }

  getValuesFromChildren (): void {
    this.childNodes.forEach((element: ChildNode) => {
      if (element instanceof CDynamicBase) {
        this.value[element.elementId] = element.value

        element.addEventListener(VALUECHANGEDEVENT, (event: Event) => {
          const payload = (event as CustomEvent).detail.payload
          const elementIdSource = payload.elementId
          const valueSource = payload.newValue
          this.value[elementIdSource] = valueSource
        })
      }
    })
  }

  checkFields (): Record<string, string> | null {
    const listMessages: Record<string, string> = {}
    this.childNodes.forEach((node: ChildNode) => {
      const element = node as CDynamicBase
      if ('mandatory' in element) {
        if (element.mandatory as boolean) {
          const messageError = element.getMessageError(undefined)
          if (messageError !== null) {
            listMessages[element.elementId] = messageError
          }
        }
      }
    })
    return Object.keys(listMessages).length > 0 ? listMessages : null
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._form = this.shadowRoot?.querySelector('form') as Element as HTMLFormElement
    this._isConnected = true
    handlers.bodyjson(this, this.bodyjson)
    this.getValuesFromChildren()
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    if (handlers[name] !== undefined && this._isConnected) {
      handlers[name](this, newValue, oldValue)
    }
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)
    if (handlers[name] !== undefined) {
      handlers[name](this, newValue, oldValue)
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
