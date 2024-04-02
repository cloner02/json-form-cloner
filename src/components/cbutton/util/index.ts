import { type CBase } from '../../../components/cbase/cbase'
import { CButton } from '../../../components/cbutton/cbutton'
import { type IBaseProperties } from '../../cbase/type/index'

function getComponentButton (args: IBaseProperties): CBase {
  const { value, elementId } = args
  return new CButton(value as string, elementId.toString())
}

export { getComponentButton }
