import { type IBaseProperties } from '../components/cbase/type/index'
import { type IRules } from '../components/cinput/type/index'
import { type IDynamicBaseProperties } from '../components/cstaticbase/type/index'

export const ComponentTypeEnum = Object.freeze({
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  BUTTON: 'button'
})

export interface IActionProperty {
  methodname: string
  parameters: Record<string, any>
  event?: string[]
}

export interface IActions {
  actions?: IActionProperty[]
}

export interface InputJsonProperties {
  required: boolean
  rules?: IRules
}

export interface InputJsonPropertiesWithBaseProperties extends IBaseProperties, IDynamicBaseProperties, InputJsonProperties, IActions {
}

export interface BodyJsonProperties extends IBaseProperties, IDynamicBaseProperties, InputJsonProperties, IActions {
  type: typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum]
}

export interface ButtonJsonPropertiesWithBaseProperties extends IBaseProperties, IActions {
}

export type InputJsonPropertiesMap = Record<string, InputJsonPropertiesWithBaseProperties>
export type ButtonJsonPropertiesMap = Record<string, ButtonJsonPropertiesWithBaseProperties>
