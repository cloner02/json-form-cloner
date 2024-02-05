export interface IProperties {
  value: string
  html: () => string
  css: () => string
}

export class CBase extends HTMLElement implements IProperties {
  value: string
  static observedAttributes = ['value']
  constructor () {
    super()
    this.value = ''
    this.attachShadow({ mode: 'open' })
  }

  html (): string {
    return `
                <div>${this.value}</div>
              `
  }

  css (): string {
    return `
                div {
                  color: red;
                }    
            `
  }

  template (): HTMLTemplateElement {
    const template = document.createElement('template')
    template.innerHTML = `${this.html()}<style>${this.css()}</style>`
    return template
  }

  [key: string]: any; // Add index signature to allow indexing with a string parameter

  applyValues (): void {
    const listProperties: string[] = Object.getOwnPropertyNames(this)
    listProperties.forEach((property: string) => {
      const attributeValue = this.attributes.getNamedItem(property)?.value
      if (attributeValue !== undefined) { this[property] = attributeValue }
    })
  }

  connectedCallback (): void {
    this.applyValues()
    this.render()
  }

  adoptedCallback (): void {
    console.log('adoptedCallback')
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    if (name === 'value') {
      console.log('attributeChangedCallback value')
    }
  }

  render (): void {
    this.shadowRoot?.append(document.importNode(this.template().content, true))
  }
}

customElements.define('c-base', CBase)

declare global {
  interface HTMLElementTagNameMap {
    'c-base': CBase
  }
}
