import { type CForm } from '../components/cform/cform'
import FormsCollection from '../singleton/index'

class FormController {
  private readonly formsCollection: CForm | undefined

  constructor (nameForm: string) {
    this.formsCollection = FormsCollection.get(nameForm)
  }
}

export default FormController
