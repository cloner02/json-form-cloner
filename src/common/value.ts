import { CFORM_TAG } from '../constants/index'

function getFormValues (element: HTMLElement): any {
  const parentForm = element.closest(CFORM_TAG)
  return parentForm?.value
}

function replaceValue (element: HTMLElement, value: unknown): any {
  const formValues = getFormValues(element)
  for (const key in formValues) {
    if (typeof value === 'string') {
      value = value.replace(new RegExp(`\\$\{${key}}`, 'g'), formValues[key] as string)
    }
  }
  return value
}

export { getFormValues, replaceValue }
