import { valueChangedEvent } from '../../../events/index'
import { type CDynamicBase } from '../cdynamicbase'

function valueHandler (args: Record<string, unknown>): void {
  const { element, name, newValue, oldValue } = args as {
    element: CDynamicBase
    name: string
    newValue: any
    oldValue: any
  }
  element.dispatchEvent(
    valueChangedEvent({
      name,
      newValue,
      oldValue,
      elementId: (element as HTMLElement).id
    })
  )
}

export default { value: valueHandler }
