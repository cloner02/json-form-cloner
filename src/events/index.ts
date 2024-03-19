import { VALUECHANGEDEVENT } from '../constants/index'

export function valueChangedEvent (payload: object): CustomEvent {
  return new CustomEvent(VALUECHANGEDEVENT, {
    detail: {
      payload
    }
  })
}
