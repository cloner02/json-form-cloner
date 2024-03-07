/* eslint-disable @typescript-eslint/dot-notation */
import { type CBase } from '../components/cbase/cbase'
import { type PropertiesJsonBody } from '../type/index'
import { COMPONENT_ENUM } from './enum/enum_components'

/**
 * Decorator function that adds utility methods to a class.
 *
 * @returns A class decorator function.
 *
 * @example
 * ```typescript
 * @Utils()
 * class MyClass {
 *   // ...
 * }
 * ```
 * @category Decorator
 *
 * List Methods and properties added to the class:
 * @function renderBodyjson - Renders the JSON body by creating and appending components to the shadow root.
 * @property {object} bodyJsonParse - Represents the parsed JSON body.
 */

export function Utils (): ClassDecorator {
  return function (target) {
    /**
     * Represents the parsed JSON body.
     */
    target.prototype.bodyJsonParse = {}

    /**
     * Renders the JSON body by creating and appending components to the shadow root.
     *
     * @param json - The JSON string to be parsed and rendered.
     */
    target.prototype.renderBodyjson = function (json: string) {
      this.bodyJsonParse = JSON.parse(json) ?? {}

      for (const key in this.bodyJsonParse) {
        if (this.bodyJsonParse[key] !== null) {
          const typeOfElement = this.bodyJsonParse[key].type
          const propertiesOfElement = this.bodyJsonParse[key] as PropertiesJsonBody
          propertiesOfElement.id = key
          if (typeOfElement in COMPONENT_ENUM) {
            const keyOfTypeOfElement = typeOfElement as keyof typeof COMPONENT_ENUM
            const component: CBase = COMPONENT_ENUM[keyOfTypeOfElement](propertiesOfElement)
            this.shadowRoot?.appendChild(component)
          }
        }
      }
    }
  }
}
