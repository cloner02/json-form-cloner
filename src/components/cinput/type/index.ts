import { type IBaseProperties } from '../../cbase/type/index'

interface ITypeInput {
  html: (value: any, elementId: string, label: string) => string
  defaultRule: () => void
}

interface IPropertiesInput extends IBaseProperties {
  typeInput: ITypeInput
  updateValue: (event: Event) => void
  htmlwrapper: () => string
  inputEvent: () => void
  onBlurEvent: () => void
  rules?: IRules
}

interface IRules {
  maximum: number
  minimum: number
  minLength: number
  maxLength: number
  pattern: string
}

export { type ITypeInput, type IPropertiesInput, type IRules }
