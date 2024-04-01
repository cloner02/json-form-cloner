import { type IRules, type ITypeInput } from '../../type/index'

class TextInput implements ITypeInput, IRules {
  minlength?: number
  maxlength?: number
  pattern?: string
  conditional?: (value: string) => boolean

  constructor (rules?: IRules) {
    this.pattern = rules?.pattern
    this.minlength = rules?.minlength
    this.maxlength = rules?.maxlength
  }

  html (value: any, id: string, label: string): string {
    return `
            <input type='text' id='${id}' value='${value}'></input>
            `
  }
}

export { TextInput }
