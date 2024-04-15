function bodyjsonHandler (...args: any[]): void {
  const [element, newValue] = args
  element.renderBodyjson(newValue)
}

export default { bodyjson: bodyjsonHandler }
