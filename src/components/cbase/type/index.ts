export interface IBaseProperties {
  label?: string
  elementId: string
}
export type IHandler = Record<string, (...args: any[]) => void>
