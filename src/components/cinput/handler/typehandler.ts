import { type CDynamicBase } from '../../cdynamicbase/cdynamicbase'
import { INPUTSUBCOMPONENT_ENUM } from '../enum/index'
import { type IRulesBase } from '../type/index'

function typeHandler (args: Record<string, unknown>): void {
  const { element } = args as {
    element: CDynamicBase
    newValue: string
  }
  if (element.type in INPUTSUBCOMPONENT_ENUM) {
    const keyOfTypeOfElement = element.type as keyof typeof INPUTSUBCOMPONENT_ENUM
    element.typeInput = new INPUTSUBCOMPONENT_ENUM[keyOfTypeOfElement](...[element.rules as IRulesBase])
  }
}

export default { type: typeHandler }
