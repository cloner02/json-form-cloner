import { type CDynamicBase } from '../../cdynamicbase/cdynamicbase'

function mandatoryHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CDynamicBase
    newValue: boolean
  }

  const labelElement = element.shadowRoot?.querySelector('label')
  if (labelElement !== undefined && labelElement !== null) {
    labelElement.innerHTML = (newValue) ? '*' + labelElement.innerHTML : labelElement.innerHTML.substring(1)
  }
}

export default { mandataroy: mandatoryHandler }
