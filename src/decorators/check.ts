import { getParentForm } from '../common/form'
import { type CForm } from '../components/cform/cform'

export function Check (): ClassDecorator {
  return function (target) {
    target.prototype.checkFields = function (): Record<string, string> | null {
      const form: CForm = getParentForm(this as HTMLElement as CForm)
      const checkFields = form?.checkFields()
      return checkFields
    }
  }
}
