import { type IBaseProperties } from '../../cbase/type/index'

export interface IDynamicBaseProperties extends IBaseProperties {
  value: unknown
}

export interface IMessagesForm {
  status: IStatusIcon
  message?: string | null
}

export interface IStatusIcon {
  icon: string
  name: string
}
