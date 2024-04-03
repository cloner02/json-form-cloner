import { CButton } from '../../../components/cbutton/cbutton'
import { type ButtonJsonPropertiesWithBaseProperties } from '../../../type/index'
import { type CBase } from '../../cbase/cbase'

function getComponentButton (args: ButtonJsonPropertiesWithBaseProperties): CBase {
  const { elementId, label = '' } = args
  return new CButton(elementId.toString(), label)
}

export { getComponentButton }
