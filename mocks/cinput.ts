import { faker } from '@faker-js/faker'
import { type PropertiesJsonInput, ComponentTypeEnum } from './../src/type'

export function createInputTextFake (): PropertiesJsonInput {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.TEXT,
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      required: faker.datatype.boolean()
    }
  }
}

export function createInputTextFakeToJson (): string { return JSON.stringify(createInputTextFake()) }
