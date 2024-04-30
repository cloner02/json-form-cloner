import { getParentForm } from '../common/form'
import { type IMessagesForm } from '../components/cdynamicbase/type/index'
import { type CForm } from '../components/cform/cform'

export function Check (): ClassDecorator {
  return function (target) {
    target.prototype.checkFields = function (): Record<string, IMessagesForm> | null {
      const form: CForm = getParentForm(this as HTMLElement as CForm)
      const checkFields = form?.checkFields()
      return checkFields
    }
    target.prototype.changeStyleToErrorInForm = function (): void {
      const form: CForm = getParentForm(this as HTMLElement as CForm)
      form?.changeStyleToStatus()
    }
  }
}
