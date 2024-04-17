import { type CBase } from '../../../components/cbase/cbase'
import { CInput } from '../../../components/cinput/cinput'
import { type InputJsonPropertiesWithBaseProperties } from '../../../type/index'

function getComponentInput (args: InputJsonPropertiesWithBaseProperties): CBase {
  const { value, type, elementId, label = '', mandatory = false, rules = {} } = args
  return new CInput(value, type, elementId, label, mandatory, rules)
}

export { getComponentInput }
