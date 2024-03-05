// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CForm } = require('json-form-cloner')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createInputTextFake } = require('./../../mocks/cinput')

describe('CBase component', () => {
  const CFORM_TAG = 'c-form'
  const getShadowRoot = (tagName: string): ShadowRoot | null => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot
  }
  it('renders correctly', () => {
    const cForm = new CForm()

    expect(cForm.render()).toMatchSnapshot()
  })
  it('dom renders correctly with the jsonbody property with a input', async () => {
    console.log('createInputTextFake', createInputTextFake())

    const bodyjson = `{
      "name": {
        "type": "text",
        "value": "Juan",
        "required": true,
        "label": "Nombre"
      }
    }
                     `
    const myForm = document.createElement(CFORM_TAG)
    myForm.setAttribute('bodyjson', String(bodyjson))
    window.document.body.appendChild(myForm)

    const renderCForm = getShadowRoot(CFORM_TAG)
    const renderCInput = renderCForm?.querySelector('c-input')?.shadowRoot
    const value = renderCInput?.querySelector('input')?.getAttribute('value')
    expect(value).toBe('Juan')
  })
})
