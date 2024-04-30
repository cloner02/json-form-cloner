import { type IBaseProperties } from '../../cbase/type/index'
import { type IMessagesForm } from '../../cdynamicbase/type/index'

export interface IPropertiesForm extends IBaseProperties {
  bodyjson: string
  getValuesFromChildren: () => void
  setValuesToChildren: () => void
  checkFields: () => Record<string, IMessagesForm> | null
}
