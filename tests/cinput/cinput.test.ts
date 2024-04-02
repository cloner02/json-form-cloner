import { CFORM_TAG, CINPUT_TAG } from '../../src/constants'
import { createTextInputFakeToJson, createPasswordInputFakeToJson, createEmailInputFakeToJson } from '../mocks/cinput'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getPropertyValueFromJson } = require('json-form-cloner')

afterEach(() => {
  document.body.innerHTML = ''
})

describe('CInput component', () => {
  it('dom renders correctly with the jsonbody property with a input of type TEXT and its value is expected to be set', async () => {
    const textInputjson = createTextInputFakeToJson()

    const inputValue = getPropertyValueFromJson('value', textInputjson)

    const myForm = document.createElement(CFORM_TAG)
    myForm.setAttribute('id', 'form1')
    myForm.setAttribute('bodyjson', String(textInputjson))
    window.document.body.appendChild(myForm)

    const renderCForm = document.querySelector(CFORM_TAG)
    const renderCInput = renderCForm?.querySelector(CINPUT_TAG)?.shadowRoot
    const value = renderCInput?.querySelector('input')?.getAttribute('value')

    expect(value).toBe(inputValue)
  })
  it('dom renders correctly with the jsonbody property with a input of type PASSWORD and its value is expected to be set', async () => {
    const passwordInputjson = createPasswordInputFakeToJson()

    const inputValue = getPropertyValueFromJson('value', passwordInputjson)

    const myForm = document.createElement(CFORM_TAG)
    myForm.setAttribute('id', 'form2')
    myForm.setAttribute('bodyjson', String(passwordInputjson))
    window.document.body.appendChild(myForm)

    const renderCForm = document.querySelector(CFORM_TAG)
    const renderCInput = renderCForm?.querySelector(CINPUT_TAG)?.shadowRoot
    const value = renderCInput?.querySelector('input')?.getAttribute('value')

    expect(value).toBe(inputValue)
  })

  it('dom renders correctly with the jsonbody property with a input of type EMAIL and its value is expected to be set', async () => {
    const emailInputjson = createEmailInputFakeToJson()

    const inputValue = getPropertyValueFromJson('value', emailInputjson)

    const myForm = document.createElement(CFORM_TAG)
    myForm.setAttribute('id', 'form3')
    myForm.setAttribute('bodyjson', String(emailInputjson))
    window.document.body.appendChild(myForm)

    const renderCForm = document.querySelector(CFORM_TAG)
    const renderCInput = renderCForm?.querySelector(CINPUT_TAG)?.shadowRoot
    const value = renderCInput?.querySelector('input')?.getAttribute('value')

    expect(value).toBe(inputValue)
  })
})
