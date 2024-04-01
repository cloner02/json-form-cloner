import { type IRules, type ITypeInput } from '../../type/index'

class PasswordInput implements ITypeInput {
  rules: IRules = {}
  type: string = 'password'

  constructor (rules?: IRules) {
    this.rules.pattern = rules?.pattern ?? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    this.rules.minlength = rules?.minlength ?? 8
    this.rules.maxlength = rules?.maxlength ?? 20
  }
}

export { PasswordInput }
