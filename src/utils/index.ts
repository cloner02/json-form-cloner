// import { ElementJsonFormatError, PropertyNotFoundError } from './../exceptions/index'

/* export function getPropertyValueFromJson (propertyName: string, json: string): any {
  const parsedJson: Record<string, any> = JSON.parse(json)
  const keys = Object.keys(parsedJson)

  if (keys.length !== 1) {
    throw new ElementJsonFormatError()
  }
  const key = keys[0]
  const infoOfElement = parsedJson[key] ?? {}

  if (!Object.prototype.hasOwnProperty.call(infoOfElement, propertyName)) {
    throw new PropertyNotFoundError(propertyName)
  }
  return infoOfElement[propertyName]
} */

// eslint-disable-next-line no-extend-native
export default String.prototype.getPropertyValueFromJson = function (propertyName: string): any {
  console.log('this', this)
  const parsedJson: Record<string, any> = JSON.parse(this.toString())
  const keys = Object.keys(parsedJson)

  if (keys.length !== 1) {
    throw new Error('JSON is empty or is not a valid JSON object for a element of the form.')
  }
  const key = keys[0]
  const infoOfElement = parsedJson[key] ?? {}

  if (!Object.prototype.hasOwnProperty.call(infoOfElement, propertyName)) {
    throw new Error(`Property ${propertyName} not found in JSON`)
  }
  return infoOfElement[propertyName]
}
