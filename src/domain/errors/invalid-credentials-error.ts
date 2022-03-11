export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credênciais inválidas')
    this.name = 'InvalidCredentialsError'
  }
}
