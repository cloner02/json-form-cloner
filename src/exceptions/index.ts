export class ElementJsonFormatError extends Error {
  constructor () {
    super('JSON is empty or is not a valid JSON object for a element of the form.')
  }
}

export class PropertyNotFoundError extends Error {
  constructor (propertyName: string) {
    super(`Property ${propertyName} not found in JSON`)
  }
}
