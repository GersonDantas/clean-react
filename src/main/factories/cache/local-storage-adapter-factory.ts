import { LocalStorageAdapter } from '@/infra/http/cache/local-storage-adapter'

export const makeLocalStorageAdapter = (): LocalStorageAdapter => {
  return new LocalStorageAdapter()
}
