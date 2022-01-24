import React from 'react'
import { makeRemoteAuthentication } from '@/main/factories/usecase/authentication/remote-authentication_factory'
import { makeLoginValidation } from './login-validation-factory'
import { makeLocalSaveAccessToken } from '@/main/factories/usecase/save-access-token/local-save-access-token-factory'
import { Login } from '@/presentation/pages'

export const makeLogin: React.FC = () => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
      saveAccessToken={makeLocalSaveAccessToken()}
    />
  )
}
