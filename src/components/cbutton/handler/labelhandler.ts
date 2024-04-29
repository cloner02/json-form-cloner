import { type CBase } from '../../cbase/cbase'

function labelHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CBase
    newValue: string
  }
  const buttonElement = element.shadowRoot?.querySelector('button')
  if (buttonElement !== undefined && buttonElement !== null) {
    buttonElement.innerHTML = newValue ?? ''
  }
}

export default { label: labelHandler }
