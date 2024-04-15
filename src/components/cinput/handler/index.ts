import valueHandler from './valuehandler'

const handlers: Record<string, (...args: any[]) => void> = {
  ...valueHandler
}

export default handlers
