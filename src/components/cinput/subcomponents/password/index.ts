import { type ITypeInput } from '../../type/index'

class PasswordInput implements ITypeInput {
  html (value: any, id: string, label: string): string {
    return `
            <label for='${id}'>${label}</label>
            <input type='password' id='${id}' value='${value}'></input>
          `
  }
}

export { PasswordInput }
