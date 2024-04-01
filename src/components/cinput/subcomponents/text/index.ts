import { type IRules, type ITypeInput } from '../../type/index'

class TextInput implements ITypeInput {
  rules: IRules = {}
  type: string = 'text'

  constructor (rules?: IRules) {
    this.rules = rules ?? {}
  }
}

export { TextInput }
