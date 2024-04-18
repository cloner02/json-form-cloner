import { type CBase } from '../cbase'

function labelHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as {
    element: CBase
    newValue: string
  }
  element.label = newValue
  console.log('labelHandler0', element.label)
}

export default { label: labelHandler }
