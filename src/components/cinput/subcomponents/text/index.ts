import { type ITypeInput } from '../../type/index'

class TextInput implements ITypeInput {
  html (value: any, id: string, label: string): string {
    return `
            <input type='text' id='${id}' value='${value}'></input>
            `
  }
}

export { TextInput }
