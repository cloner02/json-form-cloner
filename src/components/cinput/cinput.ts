import { CBase } from '../cbase/cbase'

export class CInput extends CBase {
  constructor () {
    super()
    this.value = ''
  }

  template (): HTMLTemplateElement {
    const template = document.createElement('template')
    template.innerHTML = `
        <input value='${this.value}'></input>
      `
    return template
  }

  connectedCallback (): void {
    this.render()
  }

  adoptedCallback (): void {
    console.log('adoptedCallback')
  }

  attributeChangedCallback (name: any, oldValue: any, newValue: any): void {
    super.attributeChangedCallback(name, oldValue, newValue)
    console.log('attributeChangedCallback')
  }

  render (): void {
    super.render()
  }
}

customElements.define('c-input', CInput)

declare global {
  interface HTMLElementTagNameMap {
    'c-input': CInput
  }
}
