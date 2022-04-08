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

  it('Should present survey result', () => {
    mockSuccess()
    cy.visit('/surveys/any_id')
    cy.getByTestId('question').should('have.text', 'Question')
    cy.getByTestId('day').should('have.text', '03')
    cy.getByTestId('month').should('have.text', 'fev')
    cy.getByTestId('year').should('have.text', '2020')
    cy.get('li:nth-child(1)').then(li => {
      assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer')
      assert.equal(li.find('[data-testid="percent"]').text(), '80%')
      assert.equal(li.find('[data-testid="image"]').attr('src'), 'any_image')
    })
    cy.get('li:nth-child(2)').then(li => {
      assert.equal(li.find('[data-testid="answer"]').text(), 'any_answer_2')
      assert.equal(li.find('[data-testid="percent"]').text(), '30%')
      assert.notExists(li.find('[data-testid="image"]'))
    })
  })

  it('Should goto SurveyResult on back button click', () => {
    cy.visit('')
    mockSuccess()
    cy.visit('/surveys/any_id')
    cy.getByTestId('back-button').click()
    Helpers.testUrl('/')
  })
})
