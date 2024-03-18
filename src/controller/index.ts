import { type CForm } from '../components/cform/cform'
import FormsCollection from '../singleton/index'

export class FormController {
  private readonly formsCollection: CForm | undefined

  constructor (nameForm: string) {
    this.formsCollection = FormsCollection.get(nameForm)
  }
}
