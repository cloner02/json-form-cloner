import { type IStatusIcon } from '../type/index'

const STATUS_ENUM: Record<string, IStatusIcon> = Object.freeze({
  SUCCESS: { name: 'success', icon: '&#10004;' }, // HTML entity for check
  WARNING: { name: 'warning', icon: '&#9888;' }, // HTML entity for warning
  ERROR: { name: 'error', icon: '&#10006;' } // HTML entity for cross
})

export { STATUS_ENUM }
