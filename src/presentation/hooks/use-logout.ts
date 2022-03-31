import { ApiContext } from '@/presentation/context'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

type ResultType = () => void

export const useLogout = (): ResultType => {
  const navigate = useNavigate()
  const { setCurrentAccount } = useContext(ApiContext)
  return (): void => {
    setCurrentAccount(undefined)
    navigate('/login', { replace: true })
  }
}
