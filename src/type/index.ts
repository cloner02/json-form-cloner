export const ComponentTypeEnum = Object.freeze({
  TEXT: 'text',
  PASSWORD: 'password'
})

export interface PropertiesJsonBody {
  type: typeof ComponentTypeEnum[keyof typeof ComponentTypeEnum]
  label: string
  value: string
  required: boolean
}

export type PropertiesJsonInput = Record<string, PropertiesJsonBody>
