import labelHandler from './labelhandler'

const handlers: Record<string, (args: Record<string, unknown>) => void> = {
  ...labelHandler
}

export default handlers
