import { BUTTON_SLOT } from '../../constants/index'
import { Actions } from '../../decorators/actions'
import { Check } from '../../decorators/check'
import { handlerProperty } from '../../decorators/property'
import { type IActions, type IActionProperty } from '../../type/index'
import { CBase } from '../cbase/cbase'
import style from './../../template/cButton/cbutton.css'
import handlers from './handler/index'

@Check()
@Actions()
export class CButton extends CBase implements IActions {
  private _buttonElement: HTMLButtonElement

  protected _actions: IActionProperty[] = []
  @handlerProperty
    actions: IActionProperty[]

  static observedAttributes = ['label', 'actions']

  constructor (elementId: string, label: string, actions: IActionProperty[] = []) {
    super(elementId, label)
    this.actions = actions
    this._buttonElement = null as unknown as HTMLButtonElement
  }

  clickEvent (): void {
    this._buttonElement.addEventListener('click', () => {
      // this.checkFields()
      this.changeStyleToErrorInForm()
      this.actionCallback()
    })
  }

  connectedCallback (): void {
    this.setAttribute('slot', BUTTON_SLOT as string)
    super.connectedCallback()
    this._buttonElement = this.shadowRoot?.querySelector('button') as Element as HTMLButtonElement
    this.clickEvent()
  }

  async propertyChangedCallback (name: string, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)
    if (handlers[name] !== undefined && oldValue !== newValue) {
      handlers[name]({ element: this, newValue, oldValue })
    }
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
