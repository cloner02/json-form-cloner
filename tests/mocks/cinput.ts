// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PropertiesJsonInput, ComponentTypeEnum } = require('../../src/type')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

export function createInputTextFake (): typeof PropertiesJsonInput {
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
