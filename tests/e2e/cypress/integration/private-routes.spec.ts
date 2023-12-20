import * as Helper from '../utils/helpers'

describe('PrivateRoute', () => {
  it('Should logout if survey-list has no token', () => {
    cy.visit('')
    Helper.testUrl('/login')
  })

  it('Should logout if survey-list has no token', () => {
    cy.visit('/surveys/any_id')
    Helper.testUrl('/login')
  })
})
