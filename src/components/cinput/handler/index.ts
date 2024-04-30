import labelhandler from './labelhandler'
import valueHandler from './valuehandler'
import typeHandler from './typehandler'
import mandatoryhandler from './mandatoryhandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...valueHandler,
  ...labelhandler,
  ...typeHandler,
  ...mandatoryhandler
}

export default handlers
