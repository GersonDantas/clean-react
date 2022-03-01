import { mockAccountModel } from '@/domain/test'
import { LocalStorageAdapter } from '@/infra/http/cache/local-storage-adapter'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from './current-account-adapter'

// moclar todos os módulos do LocalStorageAdapter. Todos os objetos dele, vao ser como Dummes, ou um  {}
jest.mock('@/infra/http/cache/local-storage-adapter')

describe('CurrentAccountAdapter', () => {
  test('Should call LocalStorageAdapter.set with correct values', () => {
    const account = mockAccountModel()
    const setSpy = jest.spyOn(LocalStorageAdapter.prototype, 'set')
    setCurrentAccountAdapter(account)
    expect(setSpy).toHaveBeenCalledWith('account', account)
    // console.log(localStorage)
  })

  test('Should call LocalStorageAdapter.get with correct value', () => {
    const account = mockAccountModel()
    const getSpy = jest.spyOn(LocalStorageAdapter.prototype, 'get').mockReturnValueOnce(account)
    const result = getCurrentAccountAdapter()
    expect(getSpy).toHaveBeenCalledWith('account')
    expect(result).toEqual(account)
  })
})
