export class EmailInUserError extends Error {
  constructor () {
    super('Esse email já está em uso')
    this.name = 'InvalidCredentialsError'
  }
}
