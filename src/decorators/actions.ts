import { replaceValue } from '../common/value'
import { MethodNotFoundException } from '../exceptions/index'
import MethodCollection from '../singleton/methodCollection'
import { type IActionProperty } from '../type/index'

export function Actions (): ClassDecorator {
  return function (target) {
    target.prototype.actionCallback = function (): any {
      const actions: IActionProperty[] = this.actions
      const methods = MethodCollection.getInstance().getMethods()

      for (const action of actions) {
        if (methods !== undefined && typeof methods[action.methodname] === 'function') {
          const parameters: string[] = getParameters(methods[action.methodname])
          const parameterValues: unknown[] = parameters.map(parameter => replaceValue(this as HTMLElement, action.parameters[parameter]))
          const result = methods[action.methodname](...parameterValues)
          if (result !== undefined) { return result }
        } else {
          throw new MethodNotFoundException(action.methodname)
        }
      }
    }
    function getParameters (func: (...args: any[]) => any): string[] {
      const functionAsString = func.toString()
      const parametersAsString = functionAsString.slice(functionAsString.indexOf('(') + 1, functionAsString.indexOf(')'))
      const parametersWithoutComments = parametersAsString.replace(/\/\*.*?\*\//g, '') // remove comments
      const parameters = parametersWithoutComments.split(',').map(parameter => parameter.trim())
      return parameters
    }
  }
}
