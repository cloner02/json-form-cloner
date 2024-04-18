import { type CDynamicBase } from '../../cdynamicbase/cdynamicbase'

function labelHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CDynamicBase
    newValue: string
  }

  const labelElement = element.shadowRoot?.querySelector('label')
  if (labelElement !== undefined && labelElement !== null) {
    labelElement.innerHTML = newValue ?? ''
  }
}

export default { label: labelHandler }
