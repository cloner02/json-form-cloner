import { getComponentTextInput, getComponentPasswordInput } from '../../components/cinput/util/index'

const COMPONENT_ENUM = Object.freeze({
  text: getComponentTextInput,
  password: getComponentPasswordInput
})

export { COMPONENT_ENUM }
