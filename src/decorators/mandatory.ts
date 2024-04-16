import { CInput } from '../components/cinput/cinput'
import { type CDynamicBase } from '../components/cstaticbase/cstaticbase'

export function mandatoryMsg (getElement: (instance: any) => CDynamicBase): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originaMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const element = getElement(this)
      let msgError: string | null = null
      if (element instanceof CInput) {
        msgError = (element.mandatory && (element.value.trim() === '' || element.value.trim() === null || element.value.trim() === undefined)) ? `the ${element.label} field is empty` : null
      }
      args[0] = (args[0] === undefined && msgError !== null) ? msgError : args[0]
      return originaMethod.apply(this, args)
    }
  }
}
