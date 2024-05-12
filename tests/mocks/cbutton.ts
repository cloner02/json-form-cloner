import { type ButtonJsonPropertiesMap, ComponentTypeEnum } from './../../src/type'
import { faker } from '@faker-js/faker'

export function createButtonFake (): ButtonJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.BUTTON,
      label: faker.lorem.word(),
      elementId: faker.lorem.word() // Add the elementId property
    }
  }
}
export function createButtonFakeToJson (): string { return JSON.stringify(createButtonFake()) }
