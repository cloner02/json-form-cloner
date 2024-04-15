function valueHandler (...args: any[]): void {
  const [element] = args
  element.setValuesToChildren()
}

export default { value: valueHandler }
