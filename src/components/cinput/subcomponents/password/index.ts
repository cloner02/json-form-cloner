import { type IRules, type ITypeInput } from '../../type/index'

class PasswordInput implements ITypeInput {
  rules: IRules = {}
  conditional?: (value: string) => boolean

  constructor (rules?: IRules) {
    this.rules.pattern = rules?.pattern ?? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    this.rules.minlength = rules?.minlength ?? 8
    this.rules.maxlength = rules?.maxlength ?? 20
  }

  html (value: any, id: string, label: string, propsRules: string): string {
    return `
            <input placeholder="${label}" type='password' placeholder="${label}" id='${id}' value='${value}' ${propsRules}></input>
          `
  }
}

export { PasswordInput }
