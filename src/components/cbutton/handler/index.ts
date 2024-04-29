import actionshandler from './actionshandler'
import labelhandler from './labelhandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...labelhandler,
  ...actionshandler
}

export default handlers
