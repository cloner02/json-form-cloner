import { type IBaseProperties } from '../../cbase/type/index'

export interface IPropertiesForm extends IBaseProperties {
  bodyjson: string
  setvalues: () => void
}
