import { type CBase } from '../../../components/cbase/cbase'
import { CButton } from '../../../components/cbutton/cbutton'
import { type PropertiesJsonBody } from '../../../type/index'

function getComponentButton (args: PropertiesJsonBody): CBase {
  const { value, elementId } = args
  return new CButton(value, elementId)
}

export { getComponentButton }
