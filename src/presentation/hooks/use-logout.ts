import { ApiContext } from '@/presentation/context'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'

type ResultType = () => void

export const useLogout = (): ResultType => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)
  return (): void => {
    setCurrentAccount(undefined)
    history.replace('/login')
  }
}
