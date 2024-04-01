import { type IBaseProperties } from '../../cbase/type/index'

interface ITypeInput {
  html: (value: any, elementId: string, label: string) => string
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
  minlength?: number
  maxlength?: number
  pattern?: string
  conditional?: (value: string) => boolean
}

interface IRulesRange extends IRules {
  max?: number
  min?: number
}

export { type ITypeInput, type IPropertiesInput, type IRules, type IRulesRange }
