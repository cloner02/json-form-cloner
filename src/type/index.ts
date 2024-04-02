import { type IBaseProperties } from '../components/cbase/type/index'
import { type IRules } from '../components/cinput/type/index'

export const ComponentTypeEnum = Object.freeze({
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  BUTTON: 'button'
})

export interface InputJsonProperties {
  required: boolean
  rules?: IRules
}

export interface InputJsonPropertiesWithBaseProperties extends IBaseProperties, InputJsonProperties {
}

export interface BodyJsonProperties extends IBaseProperties, InputJsonProperties {
  type: typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum]
}

export type InputJsonPropertiesMap = Record<string, InputJsonPropertiesWithBaseProperties>
export type ButtonJsonPropertiesMap = Record<string, IBaseProperties>
