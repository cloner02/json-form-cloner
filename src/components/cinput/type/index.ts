import { type IBaseProperties } from '../../cbase/type/index'

interface ITypeInput {
  type: string
  rules: IRules
}

interface IPropertiesInput extends IBaseProperties {
  typeInput: ITypeInput
  inputEvent: () => void
  onBlurEvent: () => void
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
