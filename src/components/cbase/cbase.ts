import { EmptyIdException } from '../../exceptions/index'
import { type IBaseProperties } from './type/index'

export abstract class CBase extends HTMLElement implements IBaseProperties {
  [key: string]: any; // Add index signature to allow indexing with a string parameter
  label: string
  elementId: string

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
    const listProperties = Object.getOwnPropertyNames(this).filter(name => typeof this[name] !== 'function')
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
  }

  adoptedCallback (): void {
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
  }

  async propertyChangedCallback (name: any, oldValue: any, newValue: any): Promise<void> {
    await this.connectedPromise
  }

  render (): void {
    while ((this.shadowRoot?.firstChild) != null) {
      this.shadowRoot.firstChild.remove()
    }
    this.shadowRoot?.append(document.importNode(this.template().content, true))
  }
}
