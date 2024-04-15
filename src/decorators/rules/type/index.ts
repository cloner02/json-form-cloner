export interface IRulesCondition {
  name: string
  condition: (...args: any[]) => boolean
  message: (...args: any[]) => string
}
