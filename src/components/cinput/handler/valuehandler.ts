function valueHandler (...args: any[]): void {
  const [element, newValue] = args

  element._inputElement.value = newValue
  const labelElement = element.shadowRoot?.querySelector('label')
  if (newValue !== null && newValue !== '' && newValue !== undefined) {
    labelElement?.classList.add('top')
  } else {
    labelElement?.classList.remove('top')
  }
}

export default { value: valueHandler }
