// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CForm } = require('json-form-cloner')

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
    const cForm = new CForm()
    cForm.bodyjson = `{ 
                        'name': {
                          'type': 'text',
                          'value': 'hello world'
                          }
                      }
                     `
    window.document.body.appendChild(cForm)
    await cForm.updateComplete
    const renderedCForm = getShadowRoot(CFORM_TAG)?.innerHTML
    expect(renderedCForm?.indexOf('text')).not.toBe(-1)
  })
})
