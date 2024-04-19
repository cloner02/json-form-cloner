export function handlerProperty (target: any, propertyKey: string): void {
  const _valueKey = `_${propertyKey}`

  const getter = function (this: any): any {
    return this[_valueKey]
  }

  const setter = function (this: any, newValue: any): void {
    const oldValue = this[_valueKey]
    if (oldValue !== newValue) {
      void this.propertyChangedCallback(propertyKey, oldValue, newValue)
    }
    this[_valueKey] = newValue
  }

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  })
}
