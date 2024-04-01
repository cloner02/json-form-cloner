import { getComponentTextInput, getComponentPasswordInput, getComponentEmailInput } from '../../components/cinput/util/index'

const COMPONENT_ENUM = Object.freeze({
  text: getComponentTextInput,
  password: getComponentPasswordInput,
  email: getComponentEmailInput
})

export { COMPONENT_ENUM }
