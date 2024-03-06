import { type ITypeInput } from '../../type/index'

class ITextInput implements ITypeInput {
  html (value: any): string {
    return `<input value='${value}'></input>`
  }
}

export { ITextInput }
