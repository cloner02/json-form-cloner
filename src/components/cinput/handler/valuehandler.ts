import { type CDynamicBase } from '../../cdynamicbase/cdynamicbase'

function valueHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CDynamicBase
    newValue: string
  }

  element._inputElement.value = newValue
  const labelElement = element.shadowRoot?.querySelector('label')
  if (newValue !== null && newValue !== '' && newValue !== undefined) {
    labelElement?.classList.add('top')
  } else {
    labelElement?.classList.remove('top')
  }
}

export default { value: valueHandler }
