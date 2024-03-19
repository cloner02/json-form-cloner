import { valueChangedEvent } from '../../events/index'
import { EmptyIdException } from '../../exceptions/index'
import { type IBaseProperties } from './type/index'

export abstract class CBase extends HTMLElement implements IBaseProperties {
  [key: string]: any; // Add index signature to allow indexing with a string parameter
  label: string
  elementId: string

  private _value: any

  get value (): any {
    return this._value
  }

  set value (newValue: any) {
    const oldValue = this._value
    if (oldValue !== newValue) {
      this._value = newValue
      this.dispatchEvent(valueChangedEvent({
        name: 'value',
        newValue,
        oldValue,
        elementId: this.elementId
      }))
    }
  }

  static observedAttributes = ['value']

  constructor (value: any, elementId: string, label?: string) {
    super()
    this.label = label ?? ''
    this.value = value
    this.elementId = elementId
    this.attachShadow({ mode: 'open' })
  }

  html (): string {
    return ''
  }

  css (): string {
    return ''
  }

  template (): HTMLTemplateElement {
    const template = document.createElement('template')
    const componentHtml = this.html().replace(/\$\{(\w+|\.)+\}/g, (_, key) => this[key])
    const componentCss = this.css()
    template.innerHTML = `${componentHtml}<style>${componentCss}</style>`
    return template
  }

  applyValues (): void {
    const listProperties: string[] = Object.getOwnPropertyNames(this)
    listProperties.forEach((property: string) => {
      const attributeValue = this.attributes.getNamedItem(property)?.value
      if (attributeValue !== undefined) { this[property] = attributeValue }
    })
    /**
     * Id overwrites elementId if both are present or elementid is undefined
    */
    const idPriority = this.id ?? this.elementId

    if (idPriority === undefined) { throw new EmptyIdException() }

    this.id = idPriority
  }

  connectedCallback (): void {
    this.applyValues()
    this.render()
  }

  adoptedCallback (): void {
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    if (name === 'value') {
      this.dispatchEvent(valueChangedEvent({
        name,
        newValue,
        oldValue,
        elementId: this.elementId
      }))
    }
  }

  render (): void {
    this.shadowRoot?.append(document.importNode(this.template().content, true))
  }
}
