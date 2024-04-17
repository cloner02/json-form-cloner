import { type IBaseProperties } from '../components/cbase/type/index'
import { type ITypeInput } from '../components/cinput/type/index'
import { type IDynamicBaseProperties } from '../components/cdynamicbase/type/index'

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

export interface IType {
  type: string
}

export interface IActions {
  actions?: IActionProperty[]
}

export interface IMandatory {
  mandatory: boolean
}

export interface InputJsonPropertiesWithBaseProperties extends IBaseProperties, IDynamicBaseProperties, ITypeInput, IActions, IMandatory, IType {
}

export interface BodyJsonProperties extends IBaseProperties, IDynamicBaseProperties, ITypeInput, IActions, IMandatory, IType {
  type: typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum]
}

export interface ButtonJsonPropertiesWithBaseProperties extends IBaseProperties, IActions {
}

export type InputJsonPropertiesMap = Record<string, InputJsonPropertiesWithBaseProperties>
export type ButtonJsonPropertiesMap = Record<string, ButtonJsonPropertiesWithBaseProperties>
