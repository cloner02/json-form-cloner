// eslint-disable-next-line @typescript-eslint/no-var-requires
const { CBase } = require('json-form-cloner')

describe('CBase component', () => {
  const CBASE_TAG = 'c-base'
  const getShadowRoot = (tagName: string): ShadowRoot | null => {
    return document.body.getElementsByTagName(tagName)[0].shadowRoot
  }
  it('renders correctly', () => {
    const cBase = new CBase()

    expect(cBase.render()).toMatchSnapshot()
  })
  it('dom renders correctly with the value property', async () => {
    const cBase = new CBase()
    cBase.value = 'hello world'
    window.document.body.appendChild(cBase)
    await cBase.updateComplete
    const renderedCbase = getShadowRoot(CBASE_TAG)?.innerHTML
    const cBaseValue: string | null = cBase?.value
    expect(renderedCbase?.indexOf(cBaseValue ?? '')).not.toBe(-1)
  })
})
