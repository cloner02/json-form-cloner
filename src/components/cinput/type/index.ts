interface ITypeInput {
  template: (value: any) => string
}

class ITextInput implements ITypeInput {
  template (value: any): string {
    return `<input value='${value}'></input>`
  }
}

export { ITextInput, type ITypeInput }
