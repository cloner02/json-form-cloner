import { type IRules, type ITypeInput } from '../../type/index'

class TextInput implements ITypeInput, IRules {
  rules: IRules = {}
  conditional?: (value: string) => boolean

  constructor (rules?: IRules) {
    this.rules = rules ?? {}
  }

  html (value: any, id: string, label: string, propsRules: string): string {
    return `
            <input placeholder="${label}" type='text' id='${id}' value='${value}' ${propsRules}></input>
            `
  }
}

export { TextInput }
