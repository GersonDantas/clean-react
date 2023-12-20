import Styles from './login-styles.scss'
import { Input, SubmitButton, loginState, FormStatus } from '@/presentation/pages/login/components'
import { currentAccountState, Footer, LoginHeader } from '@/presentation/components'
import { Validation } from '@/presentation/protocols/validation'
import { Authentication } from '@/domain/usecases'

import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'

type Props = {
  validation: Validation
  authentication: Authentication
}

const Login: React.FC<Props> = ({
  validation,
  authentication
}: Props) => {
  const resetLoginState = useResetRecoilState(loginState)
  const { setCurrentAccount } = useRecoilValue(currentAccountState)
  const navigate = useNavigate()
  const [state, setState] = useRecoilState(loginState)

  useEffect(() => resetLoginState(), [])
  useEffect(() => validate('email'), [state.email])
  useEffect(() => validate('password'), [state.password])

  const validate = (field: string): void => {
    const { email, password } = state
    const formData = { email, password }
    setState(old => ({ ...old, [`${field}Error`]: validation.validate(field, formData) }))
    setState(old => ({ ...old, isFormInvalid: !!old.emailError || !!old.passwordError }))
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()

    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }
      setState(old => ({
        ...old,
        isLoading: true
      }))
      const account = await authentication.auth({
        email: state.email,
        password: state.password
      })
      setCurrentAccount(account)
      navigate('/', { replace: true })
    } catch (error) {
      setState(old => ({
        ...old,
        isLoading: false,
        mainError: error.message
      }))
    }
  }

  return (
    <div className={Styles.loginWrap}>
      <LoginHeader />
      <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <SubmitButton text="Entrar" />
        <Link data-testid="signup-link" to="/signup" className={Styles.link}>
          Criar Conta
        </Link>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
