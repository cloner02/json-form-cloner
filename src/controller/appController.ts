import { FormController } from './formController'
import MethodCollection from '../singleton/methodCollection'

export class AppController {
  public methodCollection: MethodCollection

  constructor () {
    this.methodCollection = MethodCollection.getInstance()
  }

  public getFormController (nameForm: string): FormController {
    return new FormController(nameForm)
  }
}
