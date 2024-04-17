import { type IType, type IMandatory } from '../../../type/index'
import { type IBaseProperties } from '../../cbase/type/index'

interface ITypeInput extends IRules {
}
interface IRules {
  rules?: IRulesBase
}

interface IPropertiesInput extends IBaseProperties, IMandatory, IType, IRules {
  typeInput: ITypeInput
  inputEvent: () => void
  onBlurEvent: () => void
}

interface IRulesBase {
  minlength?: number
  maxlength?: number
  pattern?: string
  conditional?: (value: string) => boolean
}

interface IRulesRange extends IRulesBase {
  max?: number
  min?: number
}

export { type ITypeInput, type IPropertiesInput, type IRulesBase, type IRulesRange }
