import { ELEMENT_SLOT, PREFIXMESSAGE } from '../../constants/index'
import { ruleMsg } from '../../decorators/rules/rules'
import { CDynamicBase } from '../cstaticbase/cstaticbase'
import { type ITypeInput, type IPropertiesInput } from './type/index'
import style from './../../template/cInput/cinput.css'
export class CInput extends CDynamicBase implements IPropertiesInput {
  typeInput: ITypeInput
  private _inputElement: HTMLInputElement

  constructor (value: any, elementId: string, label: string, typeInput: ITypeInput) {
    super(value, elementId, label)
    this._inputElement = null as unknown as HTMLInputElement
    this.typeInput = typeInput
    this.setAttribute('slot', ELEMENT_SLOT as string)
  }

  updateValue (event: Event): void {
    const target = event.target as HTMLInputElement
    this.value = target.value
  }

  inputEvent (): void {
    this._inputElement.addEventListener('input', this.updateValue.bind(this))
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
    if (name === 'value') {
      this._inputElement.value = newValue
      const labelElement = this.shadowRoot?.querySelector('label')
      if (newValue !== null && newValue !== '' && newValue !== undefined) {
        labelElement?.classList.add('top')
      } else {
        labelElement?.classList.remove('top')
      }
    }
  }

  html (): string {
    const propsRules = Object.entries(this.typeInput.rules)
      .filter(([ruleKey, ruleValue]) => ruleValue !== null && ruleKey !== '')
      .map(([ruleKey, ruleValue]) => `${ruleKey}=${ruleValue}`)
      .join(' ')
    return `
    <div class='elementwrapper'>
      <input type='${this.typeInput.type}' id='${this.elementId}' value='${this.value}' ${propsRules}></input>
      <label for='${this.elementId}'>${this.label}</label>
      <span id="${PREFIXMESSAGE}${this.elementId}"></span>
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
  }
}

customElements.define('c-input', CInput)

declare global {
  interface HTMLElementTagNameMap {
    'c-input': CInput
  }
}
