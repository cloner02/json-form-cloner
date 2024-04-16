import { CFORM_TAG } from '../constants/index'

function getParentForm (element: HTMLElement): any {
  return element.closest(CFORM_TAG)
}

export { getParentForm }
