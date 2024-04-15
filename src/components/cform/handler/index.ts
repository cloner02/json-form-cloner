import valueHandler from './valuehandler'
import bodyjsonhandler from './bodyjsonhandler'

const handlers: Record<string, (...args: any[]) => void> = {
  ...valueHandler,
  ...bodyjsonhandler
}

export default handlers
