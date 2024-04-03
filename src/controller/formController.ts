import { type CForm } from '../components/cform/cform'
import { FormNotFoundException } from '../exceptions/index'
import FormsCollection from '../singleton/formsCollection'

export class FormController {
  private readonly formsCollection: CForm | undefined
  constructor (nameForm: string) {
    this.formsCollection = FormsCollection.get(nameForm)
  }

  getValues (): object {
    return this.formsCollection?.value
  }

  setValues (values: object): void {
    if (this.formsCollection === undefined) { throw new FormNotFoundException() }
    this.formsCollection.value = JSON.parse(JSON.stringify(values)) ?? {}
  }
}
