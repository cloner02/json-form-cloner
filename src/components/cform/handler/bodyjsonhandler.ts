import { type CForm } from '../cform'

function bodyjsonHandler (args: Record<string, unknown>): void {
  const { element, newValue } = args as { element: CForm, newValue: any }
  element.bodyjson = newValue
  console.log('bodyjsonHandler', newValue)
  element.renderBodyjson(newValue)
}

export default { bodyjson: bodyjsonHandler }
