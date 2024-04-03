import { type CBase } from '../../../components/cbase/cbase'
import { CButton } from '../../../components/cbutton/cbutton'
import { type IBaseProperties } from '../../cbase/type/index'

function getComponentButton (args: IBaseProperties): CBase {
  const { elementId, label = '' } = args
  console.log('args', args)
  return new CButton(elementId.toString(), label)
}

export { getComponentButton }
