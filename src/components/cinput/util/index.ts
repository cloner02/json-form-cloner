import { type CBase } from '../../../components/cbase/cbase'
import { CInput } from '../../../components/cinput/cinput'
import { ITextInput } from '../../../components/cinput/subcomponents/index'
import type PropertiesJsonBody from '../../../type/index'

function getComponentTextInput (args: PropertiesJsonBody): CBase {
  const value: string = args.value
  const mytextInput = new ITextInput()
  return new CInput(value, mytextInput)
}

export { getComponentTextInput }
