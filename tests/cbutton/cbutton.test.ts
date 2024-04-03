import { createButtonFakeToJson } from '../mocks/cbutton'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CBUTTON_TAG, CFORM_TAG } = require('../../src/constants')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getPropertyValueFromJson } = require('json-form-cloner')

afterEach(() => {
  document.body.innerHTML = ''
})

describe('CButton component', () => {
  it('dom renders correctly with the jsonbody property with a button', async () => {
    const buttonjson = createButtonFakeToJson()

    const buttonName = getPropertyValueFromJson('label', buttonjson)

    const myForm = document.createElement(CFORM_TAG)
    myForm.setAttribute('id', 'form1')
    myForm.setAttribute('bodyjson', String(buttonjson))
    window.document.body.appendChild(myForm)

    const renderCForm = document.querySelector(CFORM_TAG)
    const renderCButton = renderCForm?.querySelector(CBUTTON_TAG)?.shadowRoot
    const label = renderCButton?.querySelector('button')?.textContent

    expect(label).toBe(buttonName)
  })
})
