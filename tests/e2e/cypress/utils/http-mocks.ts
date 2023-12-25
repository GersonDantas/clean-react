import { type Method } from 'axios'

import { faker } from '@faker-js/faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.intercept('POST', url, {
    statusCode: 401,
    body: {
      error: faker.lorem.words()
    }
  }).as('request')
}

export const mockForbiddenError = (url: RegExp, method: Method): void => {
  cy.intercept(method, url, {
    statusCode: 403,
    body: {
      error: faker.lorem.words()
    }
  }).as('request')
}

export const mockServerError = (url: RegExp, method: Method): void => {
  cy.intercept(method, url, {
    statusCode: faker.helpers.arrayElement([400, 404, 500]),
    body: {
      error: faker.lorem.words()
    }
  }).as('request')
}

export const mockOk = (url: RegExp, method: Method, fixture: string, alias: string = 'request'): void => {
  cy.intercept(method, url, {
    statusCode: 200,
    fixture
  }).as(alias)
}
