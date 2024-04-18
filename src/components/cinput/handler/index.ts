import labelhandler from './labelhandler'
import valueHandler from './valuehandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...valueHandler,
  ...labelhandler
}

export default handlers
