import React, { useEffect, useState } from 'react'
import Styles from './login-styles.scss'
import {
  Footer,
  FormStatus,
  Header,
  Input,
  Logo,
  Spinner
} from '@/presentation/components'
import Context from '@/presentation/context/form'
import { Validation } from '@/presentation/protocols/validation'

type Props = {
  validation?: Validation
}

const login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate({ email: state.email })
  }, [state.email])

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button
            data-testid="submit"
            disabled
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>

          <span className={Styles.link}>Criar Conta</span>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  )
}

export default login
