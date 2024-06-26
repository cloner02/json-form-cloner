import style from './../../template/cForm/cform.css'
import template from './../../template/cForm/cform.html'
import { type IPropertiesForm } from './type/index'
import { Utils } from '../../decorators/utils'
import FormsCollection from '../../singleton/formsCollection'
import { VALUECHANGEDEVENT } from '../../constants/index'
import { CDynamicBase } from '../cdynamicbase/cdynamicbase'
import handlers from './handler/index'
import { handlerProperty } from '../../decorators/property'
import { type IMessagesForm } from '../cdynamicbase/type/index'

@Utils()
export class CForm extends CDynamicBase implements IPropertiesForm {
  protected _bodyjson: string | undefined
  @handlerProperty
    bodyjson: string

  private _form: HTMLFormElement
  private _isConnected: boolean = false

  static observedAttributes = ['value', 'bodyjson']

  constructor (value: object, elementId: string, bodyjson: string = '{}') {
    super(value, elementId)
    this.value = value ?? {}
    this._form = null as unknown as HTMLFormElement
    this.bodyjson = bodyjson
    FormsCollection.put(this)
  }

  html (): string {
    return `${template}`
  }

  setValuesToChildren (): void {
    this.childNodes?.forEach((element: ChildNode) => {
      if (element instanceof CDynamicBase) {
        if (element.value !== String(this.value[element.elementId]) && this.value[element.elementId] !== undefined) {
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

  changeStyleToStatus (): void {
    const elementsWithError = this.checkFields()
    this.childNodes.forEach((node: ChildNode) => {
      if (node instanceof CDynamicBase) {
        const element = node
        element.removeStyleStatus()
        if (elementsWithError !== null) {
          if (element.elementId in elementsWithError) {
            const status = elementsWithError[element.elementId].status
            element.changeStyleToStatus(status)
            element.showValidationMessage(undefined)
          }
        }
      }
    })
  }

  checkFields (): Record<string, IMessagesForm> | null {
    const listMessages: Record<string, IMessagesForm> = {}
    this.childNodes.forEach((node: ChildNode) => {
      const element = node as CDynamicBase

      if (node instanceof CDynamicBase) {
        const status = element.getStatus()
        if (status !== null) {
          listMessages[element.elementId] = status
        }
      }
    })
    return Object.keys(listMessages).length > 0 ? listMessages : null
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._form = this.shadowRoot?.querySelector('form') as Element as HTMLFormElement
    this._isConnected = true
    handlers.bodyjson({ element: this, newValue: this.bodyjson })
  }

  slotChangeCallback (event: Event): void {
    this.setValuesToChildren()
    this.getValuesFromChildren()
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)
    if (handlers[name] !== undefined && this._isConnected && oldValue !== newValue) {
      handlers[name]({ element: this, newValue, oldValue })
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
