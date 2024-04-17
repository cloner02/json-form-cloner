import { type CBase } from '../../components/cbase/cbase'
import { type IRulesBase } from '../../components/cinput/type/index'
import { ruleList } from './list'

export function ruleMsg (getRules: (instance: any) => IRulesBase): MethodDecorator {
  function msgErrorRules (element: CBase, rules: IRulesBase): string | null {
    const rule = ruleList.find((rule) => rule.condition(rules, element))
    return (rule != null) ? rule.message(rules) : null
  }

  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originaMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const rules = getRules(this)
      const msgError = msgErrorRules(this as CBase, rules)
      args[0] = (args[0] === undefined && msgError !== null) ? msgError : args[0]
      return originaMethod.apply(this, args)
    }
  }
}
