import { type IBaseProperties } from '../../cbase/type/index'

interface ITypeInput {
  html: (value: any) => string
}

interface IPropertiesInput extends IBaseProperties {
  typeInput: ITypeInput
}

export { type ITypeInput, type IPropertiesInput }
