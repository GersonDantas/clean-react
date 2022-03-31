import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecase/authentication/remote-authentication_factory'
import { makeLoginValidation } from './login-validation-factory'
import { Login } from '@/presentation/pages'

export const MakeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
