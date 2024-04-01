import { type ITypeInput } from '../../type/index'

class EmailInput implements ITypeInput {
  html (value: any, id: string, label: string): string {
    return `
            <input type='email' id='${id}' value='${value}'></input>
          `
  }
}

export { EmailInput }
