import { type IRules, type ITypeInput } from '../../type/index'

class EmailInput implements ITypeInput {
  rules: IRules = {}
  conditional?: (value: string) => boolean

  constructor (rules?: IRules) {
    this.rules.pattern = rules?.pattern ?? '[^@\\s]+@[^@\\s]+\\.[^@\\s]+'
    this.rules.minlength = rules?.minlength ?? 8
    this.rules.maxlength = rules?.maxlength ?? 20
  }

  html (value: any, id: string, label: string, propsRules: string): string {
    return `
            <input type='email' placeholder="${label}" id='${id}' value='${value}' ${propsRules}></input>
          `
  }
}

export { EmailInput }
