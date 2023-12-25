import { mockAccountModel } from '@/tests/domain/mocks'
import { type Authentication } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAuthenticationModel = (): Authentication.Model => mockAccountModel()

export class AuthenticationSpy implements Authentication {
  account = mockAuthenticationModel()
  params: Authentication.Params
  callsCount = 0

  async auth (params: Authentication.Params): Promise<Authentication.Model> {
    this.params = params
    this.callsCount++
    return Promise.resolve(this.account)
  }
}
