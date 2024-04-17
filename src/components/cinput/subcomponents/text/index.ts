import { type IRulesBase, type ITypeInput } from '../../type/index'

class TextInput implements ITypeInput {
  rules: IRulesBase = {}

  constructor (rules?: IRulesBase) {
    this.rules = rules ?? {}
  }
}

export { TextInput }
