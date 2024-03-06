import { type CBase } from '../../../components/cbase/cbase'
import { CInput } from '../../../components/cinput/cinput'
import { ITextInput } from '../subcomponents/text/index'
import { IPasswordInput } from '../subcomponents/password/index'
import { type PropertiesJsonBody } from '../../../type/index'

function getComponentTextInput (args: PropertiesJsonBody): CBase {
  const value: string = args.value
  const mytextInput = new ITextInput()
  return new CInput(value, mytextInput)
}

function getComponentPasswordInput (args: PropertiesJsonBody): CBase {
  const value: string = args.value
  const mypasswordInput = new IPasswordInput()
  return new CInput(value, mypasswordInput)
}

export { getComponentTextInput, getComponentPasswordInput }
