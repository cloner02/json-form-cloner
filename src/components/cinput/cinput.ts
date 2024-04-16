import { ELEMENT_SLOT, PREFIXMESSAGE } from '../../constants/index'
import { ruleMsg } from '../../decorators/rules/index'
import { CDynamicBase } from '../cstaticbase/cstaticbase'
import { type ITypeInput, type IPropertiesInput } from './type/index'
import style from './../../template/cInput/cinput.css'
import handlers from './handler/index'
import { debounce } from '../../utils/index'
import { mandatoryMsg } from '../../decorators/mandatory'

export class CInput extends CDynamicBase implements IPropertiesInput {
  typeInput: ITypeInput
  mandatory: boolean
  private _inputElement: HTMLInputElement

  constructor (value: any, elementId: string, label: string, mandatory: boolean, typeInput: ITypeInput) {
    super(value, elementId, label)
    this.mandatory = mandatory
    this._inputElement = null as unknown as HTMLInputElement
    this.typeInput = typeInput
    this.setAttribute('slot', ELEMENT_SLOT as string)
  }

  inputEvent (): void {
    this._inputElement.addEventListener('input', (event: Event) => {
      const target = event.target as HTMLInputElement
      this.value = target.value
      debounce(() => { this.showValidationMessage(undefined) }, 500)
    })
  }

  onBlurEvent (): void {
    this._inputElement.addEventListener('blur', this.showValidationMessage.bind(this, undefined))
  }

  connectedCallback (): void {
    super.connectedCallback()
    this._inputElement = this.shadowRoot?.querySelector('input') as Element as HTMLInputElement
    this.inputEvent()
    this.onBlurEvent()
  }

  async propertyChangedCallback (name: string, oldValue: any, newValue: any): Promise<void> {
    await super.propertyChangedCallback(name, oldValue, newValue)
    if (handlers[name] !== undefined) {
      handlers[name](this, newValue, oldValue)
    }
  }

  html (): string {
    const mandatory = this.mandatory ? '*' : ''
    const propsRules = Object.entries(this.typeInput?.rules ?? {})
      .filter(([ruleKey, ruleValue]) => ruleValue !== null && ruleKey !== '')
      .map(([ruleKey, ruleValue]) => `${ruleKey}=${ruleValue}`)
      .join(' ')
    return `
    <div class='elementwrapper'>
      <input type='${this.typeInput.type}' id='${this.elementId}' value='${this.value}' ${propsRules}></input>
      <label for='${this.elementId}'>${mandatory} ${this.label}</label>
      <span class='tooltip' id="${PREFIXMESSAGE}${this.elementId}"></span>
    </div>
  `
  }

  css (): string {
    // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
    return `${style}`
  }

  @ruleMsg(instance => instance.typeInput.rules)
  showValidationMessage (message?: string): void {
    super.showValidationMessage(message)
    const msgElement = this.shadowRoot?.querySelector(`#${PREFIXMESSAGE}${this.elementId}`) as unknown as HTMLElement
    msgElement.style.visibility = message !== null && message !== undefined && message?.trim() !== '' && this.value.trim() !== '' ? 'visible' : 'hidden'
  }

  @mandatoryMsg(instance => instance)
  @ruleMsg(instance => instance.typeInput.rules)
  getMessageError (message?: string): string | null {
    return super.getMessageError(message)
  }
}

customElements.define('c-input', CInput)

declare global {
  interface HTMLElementTagNameMap {
    'c-input': CInput
  }
}
