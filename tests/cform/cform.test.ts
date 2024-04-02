import { CFORM_TAG } from '../constants/index'

afterEach(() => {
  document.body.innerHTML = ''
})

describe('CFprm component', () => {
  const getShadowRoot = (tagName: string): ShadowRoot | null => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot
  }
  it('dom renders correctly a form with a bodyjson empty', async () => {
    const myForm = document.createElement(CFORM_TAG)
    myForm.setAttribute('id', 'form1')
    myForm.setAttribute('bodyjson', '{}')
    window.document.body.appendChild(myForm)

    const renderCForm = getShadowRoot(CFORM_TAG as string)
    expect(renderCForm).not.toBeNull()
  })
})
