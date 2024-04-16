import { getParentForm } from '../common/form'

export function Check (): ClassDecorator {
  return function (target) {
    target.prototype.checkFields = function (): any {
      console.log('actionCallback')
      const form = getParentForm(this as HTMLElement)
      const checkFields = form?.checkFields()
      console.log(checkFields)
    }
  }
}
