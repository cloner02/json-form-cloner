import { type CForm } from '../components/cform/cform'

class FormsCollection {
  private static instance: FormsCollection
  private readonly forms: CForm[] = []
  private constructor () {

  }

  public static put (form: CForm): void {
    FormsCollection.getInstance().forms.push(form)
  }

  public static get (id: string): CForm | undefined {
    return FormsCollection.getInstance().forms.find((form: CForm) => form.elementId === id)
  }

  public static remove (id: string): void {
    const index = FormsCollection.getInstance().forms.findIndex((form: CForm) => form.elementId === id)
    if (index !== -1) {
      FormsCollection.getInstance().forms.splice(index, 1)
    }
  }

  public static getInstance (): FormsCollection {
    if (FormsCollection.instance === undefined) {
      FormsCollection.instance = new FormsCollection()
    }
    return FormsCollection.instance
  }
}

export default FormsCollection
