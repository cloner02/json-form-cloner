import { type IRules, type ITypeInput } from '../../type/index'

class EmailInput implements ITypeInput, IRules {
  minlength?: number
  maxlength?: number
  pattern?: string
  conditional?: (value: string) => boolean

  constructor (rules?: IRules) {
    this.pattern = rules?.pattern ?? '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
    this.minlength = rules?.minlength ?? 8
    this.maxlength = rules?.maxlength ?? 20
  }

  html (value: any, id: string, label: string): string {
    return `
            <input type='email' id='${id}' value='${value}'></input>
          `
  }
}

export { EmailInput }
