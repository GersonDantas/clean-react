import * as Http from './http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Http.mockUnauthorizedError(/login/)
export const mockEmailInUseError = (): void => Http.mockForbiddenError(/login/, 'POST')
export const mockUnexpectedError = (): void => Http.mockServerError(/login/, 'POST')
export const mockOk = (): void => Http.mockOk(/login/, 'POST', { accessToken: faker.datatype.uuid(), name: faker.name.findName() })
