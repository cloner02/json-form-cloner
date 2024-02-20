export interface ITypeInupt {
  template: (value: any) => string
}

export class ITextInput implements ITypeInupt {
  template (value: any): string {
    return `<input value='${value}'></input>`
  }
}
