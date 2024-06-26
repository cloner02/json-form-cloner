import valueHandler from './valuehandler'
import bodyjsonhandler from './bodyjsonhandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...valueHandler,
  ...bodyjsonhandler
}

export default handlers
