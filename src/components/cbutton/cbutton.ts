import { BUTTON_SLOT } from '../../constants/index'
import { Actions } from '../../decorators/actions'
import { type IActions, type IActionProperty } from '../../type/index'
import { CBase } from '../cbase/cbase'

@Actions()
export class CButton extends CBase implements IActions {
  private _buttonElement: HTMLButtonElement
  actions: IActionProperty[] = []
  constructor (elementId: string, label: string, actions: IActionProperty[] = []) {
    super(elementId, label)
    this.actions = actions
    this._buttonElement = null as unknown as HTMLButtonElement
    this.setAttribute('slot', BUTTON_SLOT as string)
  }

  clickEvent (): void {
    this._buttonElement.addEventListener('click', () => this.actionCallback())
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._buttonElement = this.shadowRoot?.querySelector('button') as Element as HTMLButtonElement
    this.clickEvent()
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
