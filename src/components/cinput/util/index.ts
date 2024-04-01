import { type CBase } from '../../../components/cbase/cbase'
import { CInput } from '../../../components/cinput/cinput'
import { TextInput } from '../subcomponents/text/index'
import { PasswordInput } from '../subcomponents/password/index'
import { EmailInput } from '../subcomponents/email/indext'
import { type PropertiesJsonBody } from '../../../type/index'
import { type ITypeInput } from '../type/index'

function getComponentTextInput (args: PropertiesJsonBody): CBase {
  const { rules } = args
  return getComponentInput(args, new TextInput(rules))
}

function getComponentPasswordInput (args: PropertiesJsonBody): CBase {
  const { rules } = args
  return getComponentInput(args, new PasswordInput(rules))
}

function getComponentEmailInput (args: PropertiesJsonBody): CBase {
  const { rules } = args
  return getComponentInput(args, new EmailInput(rules))
}

function getComponentInput (args: PropertiesJsonBody, typeInput: ITypeInput): CBase {
  const { value, elementId, label } = args
  return new CInput(value, elementId, label, typeInput)
}

export { getComponentTextInput, getComponentPasswordInput, getComponentEmailInput }
