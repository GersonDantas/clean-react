import { mockAccountModel } from '@/domain/test'
import { LocalStorageAdapter } from '@/infra/http/cache/local-storage-adapter'
import { setCurrentAccountAdapter } from './current-account-adapter'

// moclar todos os módulos do LocalStorageAdapter. Todos os objetos dele, vao ser como Dummes, ou um  {}
jest.mock('@/infra/http/cache/local-storage-adapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
    // console.log(localStorage)
  })
})
