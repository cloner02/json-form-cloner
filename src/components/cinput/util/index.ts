import { type CBase } from '../../../components/cbase/cbase'
import { CInput } from '../../../components/cinput/cinput'
import { TextInput } from '../subcomponents/text/index'
import { PasswordInput } from '../subcomponents/password/index'
import { EmailInput } from '../subcomponents/email/indext'
import { type InputJsonPropertiesWithBaseProperties } from '../../../type/index'
import { type ITypeInput } from '../type/index'

function getComponentTextInput (args: InputJsonPropertiesWithBaseProperties): CBase {
  const { rules } = args
  return getComponentInput(args, new TextInput(rules))
}

function getComponentPasswordInput (args: InputJsonPropertiesWithBaseProperties): CBase {
  const { rules } = args
  return getComponentInput(args, new PasswordInput(rules))
}

function getComponentEmailInput (args: InputJsonPropertiesWithBaseProperties): CBase {
  const { rules } = args
  return getComponentInput(args, new EmailInput(rules))
}

function getComponentInput (args: InputJsonPropertiesWithBaseProperties, typeInput: ITypeInput): CBase {
  const { value, elementId, label = '', mandatory = false } = args
  return new CInput(value, elementId, label, mandatory, typeInput)
}

export { getComponentTextInput, getComponentPasswordInput, getComponentEmailInput }
