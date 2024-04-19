import { type CBase } from '../cbase'

function labelHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CBase
    newValue: string
  }
  element.label = newValue
}

export default { label: labelHandler }
