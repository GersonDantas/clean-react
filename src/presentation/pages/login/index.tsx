import React from 'react'
import Styles from './login-styles.scss'
import {
  Footer,
  FormStatus,
  Header,
  Input,
  Logo,
  Spinner
} from '@/presentation/components'

const login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu email" />
        <Input type="password" name="password" placeholder="Digite sua senha" />

        <button className={Styles.submit} type="submit">
          Entrar
        </button>

        <span className={Styles.link}>Criar Conta</span>

        <FormStatus />
      </form>

      <Footer />
    </div>
  )
}

export default login
