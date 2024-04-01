import { type ITypeInput } from '../../type/index'

class PasswordInput implements ITypeInput {
  html (value: any, id: string, label: string): string {
    return `
            <input type='password' id='${id}' value='${value}'></input>
          `
  }

  defaultRule (): void {

  }
}

export { PasswordInput }
