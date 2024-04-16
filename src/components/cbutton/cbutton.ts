import { BUTTON_SLOT } from '../../constants/index'
import { Actions } from '../../decorators/actions'
import { Check } from '../../decorators/check'
import { type IActions, type IActionProperty } from '../../type/index'
import { CBase } from '../cbase/cbase'
import style from './../../template/cButton/cbutton.css'

@Check()
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
    this._buttonElement.addEventListener('click', () => {
      this.actionCallback()
      // console.log('checkFields', this.checkFields())
    })
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
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    return `${style}`
  }
}

customElements.define('c-button', CButton)
