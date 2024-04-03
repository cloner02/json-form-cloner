import { BUTTON_SLOT } from '../../constants/index'
import { CBase } from '../cbase/cbase'

export class CButton extends CBase {
  private _buttonElement: HTMLButtonElement

  constructor (elementId: string, label: string) {
    super(elementId, label)
    this._buttonElement = null as unknown as HTMLButtonElement
    this.setAttribute('slot', BUTTON_SLOT as string)
  }

  callAction (): void {
    console.log('Button clicked')
  }

  clickEvent (): void {
    this._inputElement.addEventListener('click', this.callAction.bind(this))
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._buttonElement = this.shadowRoot?.querySelector('button') as Element as HTMLButtonElement
  }

  html (): string {
    return `
    <div>
      <button type='button' id='${this.elementId}'>${this.label}</button>
    </div>
  `
  }

  css (): string {
    return ''
  }
}

customElements.define('c-button', CButton)
