import { type InputJsonPropertiesMap, ComponentTypeEnum } from './../../src/type'
import { faker } from '@faker-js/faker'

export function createTextInputFake (): InputJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.TEXT,
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      mandatory: faker.datatype.boolean(),
      elementId: faker.lorem.word() // Add the elementId property
    }
  }
}

export function createPasswordInputFake (): InputJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.PASSWORD,
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      mandatory: faker.datatype.boolean(),
      elementId: faker.lorem.word() // Add the elementId property
    }
  }
}

export function createEmailInputFake (): InputJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.EMAIL,
      label: faker.lorem.word(),
      value: faker.internet.email(),
      mandatory: faker.datatype.boolean(),
      elementId: faker.lorem.word() // Add the elementId property
    }
  }
}

export function createTextInputFakeToJson (): string { return JSON.stringify(createTextInputFake()) }
export function createPasswordInputFakeToJson (): string { return JSON.stringify(createPasswordInputFake()) }
export function createEmailInputFakeToJson (): string { return JSON.stringify(createEmailInputFake()) }
