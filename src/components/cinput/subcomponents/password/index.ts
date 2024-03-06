import { type ITypeInput } from '../../type/index'

class IPasswordInput implements ITypeInput {
  html (value: any): string {
    return `<input type='password' value='${value}'></input>`
  }
}

export { IPasswordInput }
