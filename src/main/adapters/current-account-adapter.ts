import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-adapter-factory'
import { UnexpectedError } from '@/domain/errors'
import { AccountModel } from '@/domain/models'

export const setCurrentAccountAdapter = (account: AccountModel): void => {
  if (!account?.accessToken) {
    throw new UnexpectedError()
  }
  makeLocalStorageAdapter().set('account', account)
}

export const getCurrentAccountAdapter = (): AccountModel => {
  return makeLocalStorageAdapter().get('account')
}
