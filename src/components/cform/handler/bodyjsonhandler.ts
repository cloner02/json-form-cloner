import { type CForm } from '../cform'

function bodyjsonHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as { element: CForm, newValue: any }
  element.renderBodyjson(newValue)
  element.getValuesFromChildren()
}

export default { bodyjson: bodyjsonHandler }
