import { type IRulesBase, type ITypeInput } from '../../type/index'

class EmailInput implements ITypeInput {
  rules: IRulesBase = {}
  constructor (rules?: IRulesBase) {
    this.rules.pattern = rules?.pattern ?? '[^@\\s]+@[^@\\s]+\\.[^@\\s]+'
    this.rules.minlength = rules?.minlength ?? 8
    this.rules.maxlength = rules?.maxlength ?? 20
  }
}

export { EmailInput }
