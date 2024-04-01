import { type CBase } from '../../../components/cbase/cbase'
import { CInput } from '../../../components/cinput/cinput'
import { TextInput } from '../subcomponents/text/index'
import { PasswordInput } from '../subcomponents/password/index'
import { EmailInput } from '../subcomponents/email/indext'
import { type PropertiesJsonBody } from '../../../type/index'
import { type ITypeInput } from '../type/index'

function getComponentTextInput (args: PropertiesJsonBody): CBase {
  return getComponentInput(args, new TextInput())
}

function getComponentPasswordInput (args: PropertiesJsonBody): CBase {
  return getComponentInput(args, new PasswordInput())
}

function getComponentEmailInput (args: PropertiesJsonBody): CBase {
  return getComponentInput(args, new EmailInput())
}

function getComponentInput (args: PropertiesJsonBody, typeInput: ITypeInput): CBase {
  const { value, elementId, label } = args
  return new CInput(value, elementId, label, typeInput)
}

export { getComponentTextInput, getComponentPasswordInput, getComponentEmailInput }
