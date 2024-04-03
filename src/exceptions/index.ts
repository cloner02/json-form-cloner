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

export class EmptyIdException extends Error {
  constructor () {
    super('Both id and elementId cannot be empty')
  }
}

export class FormNotFoundException extends Error {
  constructor () {
    super('Form not found')
  }
}

export class MethodNotFoundException extends Error {
  constructor (methodName: string) {
    super(`Method ${methodName} not found`)
  }
}
