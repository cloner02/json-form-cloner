import { CBase } from '../cbase/cbase'

class CButton extends CBase {
  private _buttonElement: HTMLButtonElement

  constructor (elementId: string, label: string) {
    super(elementId, label)
    this._buttonElement = null as unknown as HTMLButtonElement
  }

  clickEvent (): void {
    this._inputElement.addEventListener('input', this.updateValue.bind(this))
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._buttonElement = this.shadowRoot?.querySelector('button') as Element as HTMLButtonElement
  }

  html (): string {
    return `
    <div>
      <button id='${this.elementId}'>${this.label}</button>
    </div>
  `
  }

  css (): string {
    return ''
  }
}

customElements.define('c-button', CButton)
