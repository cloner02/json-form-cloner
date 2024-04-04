import { type CBase } from '../components/cbase/cbase'
import { type IRulesRange, type IRules } from '../components/cinput/type/index'

export function ruleMsg (getRules: (instance: any) => IRules): MethodDecorator {
  function msgErrorRuleBase (element: CBase, rules: IRules): string | null {
    console.log('element', element)
    if (rules.pattern !== undefined) {
      const pattern = new RegExp(rules.pattern)
      if (!pattern.test(element.value as string)) {
        return `Value does not match the pattern ${rules.pattern}`
      }
    }
    if (rules.minlength !== undefined && (element.value as string).length < rules.minlength) {
      return `Value is too short the minimum is ${rules.minlength} characters`
    }
    if (rules.maxlength !== undefined && (element.value as string).length > rules.maxlength) {
      return `Value is too long the maximum is ${rules.maxlength} characters`
    }
    return null
  }

  function msgErrorRulesRange (element: CBase, rules: IRules): string | null {
    const rulesRange = rules as IRulesRange
    rulesRange.max = rulesRange.max ?? rulesRange.min
    if (rulesRange !== undefined) {
      if (rulesRange.max !== undefined && element.value <= rulesRange.max) {
        return `Value is too high the maximum is ${rulesRange.max}`
      }
      if (rulesRange.min !== undefined && element.value >= rulesRange.min) {
        return `Value is too low the minimum is ${rulesRange.min}`
      }
    }
    return null
  }

  function msgErrorRules (element: CBase, rules: IRules): string | null {
    const msgError = msgErrorRuleBase(element, rules)
    if (msgError != null) {
      return msgError
    }
    return msgErrorRulesRange(element, rules)
  }

  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originaMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const rules = getRules(this)
      const msgError = msgErrorRules(this as CBase, rules)
      args[0] = (args[0] === undefined && msgError != null) ? msgError : args[0]
      return originaMethod.apply(this, args)
    }
  }
}
