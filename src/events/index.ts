import { VALUECHANGEDEVENT } from '../constants/index'
import { type IValueChangedEvent } from './type/index'

export function valueChangedEvent (payload: IValueChangedEvent): CustomEvent {
  return new CustomEvent(VALUECHANGEDEVENT, {
    detail: {
      payload
    }
  })
}
