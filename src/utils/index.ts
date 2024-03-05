import { ElementJsonFormatError, PropertyNotFoundError } from './../exceptions/index'

// eslint-disable-next-line no-extend-native
export default String.prototype.getPropertyValueFromJson = function (propertyName: string): any {
  const parsedJson: Record<string, any> = JSON.parse(this.toString())
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
