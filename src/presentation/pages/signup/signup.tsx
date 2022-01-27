import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './signup-styles.scss'
import { Footer, FormStatus, Header, Input } from '@/presentation/components'
import Context from '@/presentation/context/form/form'

const SignUp: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state: {} }}>
        <form className={Styles.form}>
          <h2>Criar conta</h2>
          <Input type="text" name="name" placeholder="Digite seu nome" />
          <Input type="email" name="email" placeholder="Digite seu email" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <Input
            type="password"
            name="passwordConfirmation"
            placeholder="Repita sua senha"
          />

          <button className={Styles.submit} type="submit">
            Cadastrar
          </button>

          <Link to="/login" className={Styles.link}>
            Voltar para Login
          </Link>

          <FormStatus />
        </form>
      </Context.Provider>

      <Footer />
    </div>
  )
}

export default SignUp
