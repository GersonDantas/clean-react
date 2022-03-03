import { useLogout } from '@/presentation/hooks'
import { ApiContext } from '@/presentation/context'
import { AccessDeniedError } from '@/domain/errors'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'

type CallBackType = (error: Error) => void
type ResultType = CallBackType

export const useErrorHandler = (callback: CallBackType): ResultType => {
  const logout = useLogout()
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      logout()
    } else {
      callback(error)
    }
  }
}
