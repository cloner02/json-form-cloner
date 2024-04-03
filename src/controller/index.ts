import { type CForm } from '../components/cform/cform'
import { FormNotFoundException, MethodNotFoundException } from '../exceptions/index'
import FormsCollection from '../singleton/index'

export class FormController {
  private readonly formsCollection: CForm | undefined
  private methods: Record<string, (...args: any[]) => any> = {}
  constructor (nameForm: string) {
    this.formsCollection = FormsCollection.get(nameForm)
  }

  executeMethod (name: string, ...args: any[]): any {
    if (this.methods[name] !== undefined && typeof this.methods[name] === 'function') {
      const result = this.methods[name](...args as [])
      if (result !== undefined) { return result }
    } else {
      throw new MethodNotFoundException(name)
    }
  }

  addMethod (name: string, method: (...args: any[]) => any): void {
    this.methods[name] = method
  }

  addMethods (methods: Record<string, (...args: any[]) => any>): void {
    this.methods = methods
  }

  getValues (): object {
    return this.formsCollection?.value
  }

  setValues (values: object): void {
    if (this.formsCollection === undefined) { throw new FormNotFoundException() }
    this.formsCollection.value = JSON.parse(JSON.stringify(values)) ?? {}
  }
}
