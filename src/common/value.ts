import { getParentForm } from './form'

function getFormValues (element: HTMLElement): any {
  const parentForm = getParentForm(element)
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
