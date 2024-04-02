import { getComponentButton } from '../../components/cbutton/util/index'
import { getComponentTextInput, getComponentPasswordInput, getComponentEmailInput } from '../../components/cinput/util/index'

const COMPONENT_ENUM = Object.freeze({
  text: getComponentTextInput,
  password: getComponentPasswordInput,
  email: getComponentEmailInput,
  button: getComponentButton
})

export { COMPONENT_ENUM }
