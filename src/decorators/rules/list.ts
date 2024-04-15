import { type CBase } from '../../components/cbase/cbase'
import { type IRulesRange, type IRules } from '../../components/cinput/type/index'
import { type IRulesCondition } from '../rules/type/index'

const pattern: IRulesCondition = {
  name: 'pattern',
  condition: (rule: IRules, element: CBase) => {
    return rule.pattern !== undefined && !new RegExp(rule.pattern).test(element.value as string)
  },
  message: (rule: IRules) => `Value does not match the pattern ${rule.pattern}`
}

const minlength: IRulesCondition = {
  name: 'minlength',
  condition: (rule: IRules, element: CBase) => {
    return rule.minlength !== undefined && (element.value as string).length < rule.minlength
  },
  message: (rule: IRules) => `Value is too short the minimum is ${rule.minlength} characters`
}

const maxlength: IRulesCondition = {
  name: 'maxlength',
  condition: (rule: IRules, element: CBase) => {
    return rule.maxlength !== undefined && (element.value as string).length > rule.maxlength
  },
  message: (rule: IRules) => `Value is too long the maximum is ${rule.maxlength} characters`
}

const max: IRulesCondition = {
  name: 'max',
  condition: (rule: IRulesRange, element: CBase) => {
    return rule.max !== undefined && element.value <= rule.max
  },
  message: (rule: IRulesRange) => `Value is too high the maximum is ${rule.max}`
}

const min: IRulesCondition = {
  name: 'min',
  condition: (rule: IRulesRange, element: CBase) => {
    return rule.min !== undefined && element.value >= rule.min
  },
  message: (rule: IRulesRange) => `Value is too low the minimum is ${rule.min}`
}

export const ruleList = [
  pattern,
  minlength,
  maxlength,
  max,
  min
]
