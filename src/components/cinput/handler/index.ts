import labelhandler from './labelhandler'
import valueHandler from './valuehandler'
import typeHandler from './typehandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...valueHandler,
  ...labelhandler,
  ...typeHandler
}

export default handlers
