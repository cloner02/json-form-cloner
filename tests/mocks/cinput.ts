// eslint-disable-next-line @typescript-eslint/no-var-requires
const { InputJsonPropertiesMap, ComponentTypeEnum } = require('../../src/type')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

export function createTextInputFake (): typeof InputJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.TEXT,
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      mandatory: faker.datatype.boolean()
    }
  }
}

export function createPasswordInputFake (): typeof InputJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.PASSWORD,
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      mandatory: faker.datatype.boolean()
    }
  }
}

export function createEmailInputFake (): typeof InputJsonPropertiesMap {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.EMAIL,
      label: faker.lorem.word(),
      value: faker.internet.email(),
      mandatory: faker.datatype.boolean()
    }
  }
}

export function createTextInputFakeToJson (): string { return JSON.stringify(createTextInputFake()) }
export function createPasswordInputFakeToJson (): string { return JSON.stringify(createPasswordInputFake()) }
export function createEmailInputFakeToJson (): string { return JSON.stringify(createEmailInputFake()) }
