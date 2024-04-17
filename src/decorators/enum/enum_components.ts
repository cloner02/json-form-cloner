import { getComponentButton } from '../../components/cbutton/util/index'
import { getComponentInput } from '../../components/cinput/util/index'

const COMPONENT_ENUM = Object.freeze({
  text: getComponentInput,
  password: getComponentInput,
  email: getComponentInput,
  button: getComponentButton
})

export { COMPONENT_ENUM }
