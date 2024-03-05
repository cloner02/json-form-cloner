import { ElementJsonFormatError, PropertyNotFoundError } from './../exceptions/index'

export function getPropertyValueFromJson (propertyName: string, json: string): any {
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
}
