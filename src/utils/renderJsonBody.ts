/* eslint-disable @typescript-eslint/dot-notation */
import { type CBase } from '../components/cbase/cbase'
import type PropertiesJsonBody from '../type/index'
import { COMPONENT_ENUM } from './getComponents'

export function renderJsonBody (json: string, shadowRoot: ShadowRoot | null): void {
  const parsedBodyjson = JSON.parse(json) ?? {}

  for (const key in parsedBodyjson) {
    if (parsedBodyjson[key] !== null) {
      const typeOfElement = parsedBodyjson[key].type
      const propertiesOfElement = parsedBodyjson[key] as PropertiesJsonBody

      if (typeOfElement in COMPONENT_ENUM) {
        const component: CBase = COMPONENT_ENUM[typeOfElement as keyof typeof COMPONENT_ENUM](propertiesOfElement)
        shadowRoot?.appendChild(component)
      }
    }
  }
}
