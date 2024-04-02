// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PropertiesJsonInput, ComponentTypeEnum } = require('../../src/type')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { faker } = require('@faker-js/faker')

export function createButtonFake (): typeof PropertiesJsonInput {
  const inputKey = faker.lorem.word()
  return {
    [inputKey]: {
      type: ComponentTypeEnum.BUTTON,
      value: faker.lorem.word()
    }
  }
}
export function createButtonFakeToJson (): string { return JSON.stringify(createButtonFake()) }
