import valueHandler from './valuehandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...valueHandler
}

export default handlers
