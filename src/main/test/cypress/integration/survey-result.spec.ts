import * as Helpers from '../utils/helpers'
import * as Http from '../utils/http-mocks'

const path = /surveys\/any_id\/result/
export const mockUnexpectedError = (): void => Http.mockServerError(path, 'GET')
export const mockAccessDeniedError = (): void => Http.mockForbiddenError(path, 'GET')
export const mockSuccess = (): void => Http.mockOk(path, 'GET', 'survey-result')

describe('SurveyResult', () => {
  beforeEach(() => {
    cy.fixture('account').then(account => {
      Helpers.setLocalStorageItem('account', account)
    })
  })

  it('Should present error on UnexpectedError', () => {
    mockUnexpectedError()
    cy.visit('/surveys/any_id')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve')
  })

  it('Should reload on button click', () => {
    mockUnexpectedError()
    cy.visit('/surveys/any_id')
    cy.getByTestId('error').should('contain.text', 'Algo de errado aconteceu. Tente novamente em breve')
    mockSuccess()
    cy.getByTestId('reload').click()
    cy.getByTestId('question').should('exist')
  })

  it('Should logout on AccessDeniedError', () => {
    mockAccessDeniedError()
    cy.visit('/surveys/any_id')
    Helpers.testUrl('/login')
  })
})
