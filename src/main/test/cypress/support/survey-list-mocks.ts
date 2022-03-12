import * as Http from './http-mocks'
import faker from 'faker'

export const mockUnexpectedError = (): void => Http.mockServerError(/login/, 'GET')
export const mockAccessDeniedError = (): void => Http.mockForbiddenError(/login/, 'GET')
