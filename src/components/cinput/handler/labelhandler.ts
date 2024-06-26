import { type CDynamicBase } from '../../cdynamicbase/cdynamicbase'

function labelHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CDynamicBase
    newValue: string
  }

  const labelElement = element.shadowRoot?.querySelector('label')
  if (labelElement !== undefined && labelElement !== null) {
    const mandatory = (element.mandatory as boolean) ? '*' : ''
    labelElement.innerHTML = mandatory + newValue ?? ''
  }
}

export default { label: labelHandler }
