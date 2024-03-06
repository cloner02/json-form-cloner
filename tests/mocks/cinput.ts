// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PropertiesJsonInput, ComponentTypeEnum } = require('../../src/type')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

export function createTextInputFake (): typeof PropertiesJsonInput {
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

export function createPasswordInputFake (): typeof PropertiesJsonInput {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.PASSWORD,
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      required: faker.datatype.boolean()
    }
  }
}

export function createTextInputFakeToJson (): string { return JSON.stringify(createTextInputFake()) }
export function createPasswordInputFakeToJson (): string { return JSON.stringify(createPasswordInputFake()) }
