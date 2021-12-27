import React, { useState } from 'react'
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

type StateProps = {
  isLoading: boolean
  errorMessage: string
}

const login: React.FC = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />

          <button className={Styles.submit} type="submit">
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
