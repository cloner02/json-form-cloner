import { type CDynamicBase } from '../../cdynamicbase/cdynamicbase'

function valueHandler (args: Record<string, unknown>): void {
  const { element } = args as { element: CDynamicBase }

  element.setValuesToChildren()
}

export default { value: valueHandler }
