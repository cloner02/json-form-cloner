import { type IRules, type ITypeInput } from '../../type/index'

class EmailInput implements ITypeInput {
  type: string = 'email'
  rules: IRules = {}

  constructor (rules?: IRules) {
    this.rules.pattern = rules?.pattern ?? '[^@\\s]+@[^@\\s]+\\.[^@\\s]+'
    this.rules.minlength = rules?.minlength ?? 8
    this.rules.maxlength = rules?.maxlength ?? 20
  }
}

export { EmailInput }
