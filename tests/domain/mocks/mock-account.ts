import { type AccountModel } from '@/domain/models'

import { faker } from '@faker-js/faker'

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.database.mongodbObjectId(),
  name: faker.internet.displayName()
})
