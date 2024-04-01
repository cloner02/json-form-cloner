import { type IRules, type ITypeInput } from '../../type/index'

class PasswordInput implements ITypeInput, IRules {
  minlength?: number
  maxlength?: number
  pattern?: string
  conditional?: (value: string) => boolean

  constructor (rules?: IRules) {
    this.pattern = rules?.pattern ?? '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
    this.minlength = rules?.minlength ?? 8
    this.maxlength = rules?.maxlength ?? 20
  }

  html (value: any, id: string, label: string): string {
    return `
            <input type='password' id='${id}' value='${value}'></input>
          `
  }
}

export { PasswordInput }
