import { type IActionProperty } from '../../../type/index'
import { type CBase } from '../../cbase/cbase'

function actionsHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CBase
    newValue: unknown
  }
  if (typeof newValue === 'string') {
    element.actions = JSON.parse(newValue) as IActionProperty
  }
}

export default { actions: actionsHandler }
