import { type IBaseProperties } from '../../cbase/type/index'

interface ITypeInput {
  html: (value: any, id: string, label: string) => string
}

interface IPropertiesInput extends IBaseProperties {
  typeInput: ITypeInput
  updateValue: (event: Event) => void
}

export { type ITypeInput, type IPropertiesInput }
