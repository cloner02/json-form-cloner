import { ElementJsonFormatError, PropertyNotFoundError } from './../exceptions/index'

export function getPropertyValueFromJson (propertyName: string, json: string): string {
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

export function debounce (callback: (...args: any[]) => any, waitTime: number): void {
  let timer: ReturnType<typeof setTimeout> | null = null

  if (timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => callback(), waitTime)
}
