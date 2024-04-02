import { type IRules } from '../components/cinput/type/index'

export const ComponentTypeEnum = Object.freeze({
  TEXT: 'text',
  PASSWORD: 'password',
  EMAIL: 'email',
  BUTTON: 'button'
})

export interface PropertiesJsonBody {
  elementId: string
  type: typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum]
  label: string
  value: string
  required: boolean
  rules?: IRules
}

export type PropertiesJsonInput = Record<string, PropertiesJsonBody>
