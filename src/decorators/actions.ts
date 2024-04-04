import { MethodNotFoundException } from '../exceptions/index'
import MethodCollection from '../singleton/methodCollection'
import { type IActionProperty } from '../type/index'

export function Actions (): ClassDecorator {
  return function (target) {
    target.prototype.actionCallback = function (): any {
      const actions: IActionProperty[] = this.actions
      const methods = MethodCollection.getInstance().getMethods()
      console.log('methods', methods)
      console.log(actions, 'actions')

      for (const action of actions) {
        if (methods !== undefined && typeof methods[action.methodname] === 'function') {
          console.log('parameters', Object.entries(action.parameters))
          const result = methods[action.methodname](...Object.entries(action.parameters))
          if (result !== undefined) { return result }
        } else {
          throw new MethodNotFoundException(action.methodname)
        }
      }
    }
  }
}
