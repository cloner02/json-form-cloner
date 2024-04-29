import { handlerProperty } from '../../decorators/property'
import { EmptyIdException } from '../../exceptions/index'
import handlers from './handler/index'
import { type IBaseProperties } from './type/index'

export abstract class CBase extends HTMLElement implements IBaseProperties {
  [key: string]: any // Add index signature to allow indexing with a string parameter
  elementId: string
  protected _label: string | undefined
  @handlerProperty
    label: string

  private readonly connectedPromise: Promise<void> | undefined
  private resolveConnectedPromise!: () => void

  constructor (elementId: string, label?: string) {
    super()
    this.label = label ?? ''
    this.elementId = elementId
    this.attachShadow({ mode: 'open' })
    this.connectedPromise = new Promise<void>((resolve) => {
      this.resolveConnectedPromise = resolve
    })
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

  applyAttributesToProperties (): void {
    const listPrototypeProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    const listObjectProperties = Object.getOwnPropertyNames(this)
    const mergedProperties = [...listPrototypeProperties, ...listObjectProperties]
    const uniqueProperties = Array.from(new Set(mergedProperties))
    const listProperties = uniqueProperties.filter(name => typeof this[name] !== 'function' && !name.startsWith('_'))
    listProperties.forEach((property: string) => {
      const attributeValue = this.attributes.getNamedItem(property)?.value
      if (attributeValue !== undefined) {
        this[property] = attributeValue
      }
    })
    /**
     * Id overwrites elementId if both are present or elementid is undefined
    */
    const idPriority = (this.id !== undefined && this.id.length > 0) ? this.id : this.elementId

    if (idPriority === undefined) { throw new EmptyIdException() }

    this.id = idPriority
    this.elementId = idPriority
  }

  connectedCallback (): void {
    this.applyAttributesToProperties()
    this.render()
    this.resolveConnectedPromise()

    this.shadowRoot?.querySelector('slot')?.addEventListener('slotchange', (event) => {
      this.slotChangeCallback(event)
    })
  }

  adoptedCallback (): void {
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    if (oldValue !== newValue && newValue !== undefined) {
      this[name] = newValue
    }
  }

  slotChangeCallback (event: Event): void {
    console.log('slotChangeCallback', event)
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await this.connectedPromise
    if (handlers[name] !== undefined && oldValue !== newValue) {
      handlers[name]({ element: this, name, newValue, oldValue })
    }
  }

  render (): void {
    while ((this.shadowRoot?.firstChild) != null) {
      this.shadowRoot.firstChild.remove()
    }
    this.shadowRoot?.append(document.importNode(this.template().content, true))
  }
}
