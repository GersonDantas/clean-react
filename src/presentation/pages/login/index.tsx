import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner'
import Logo from '@/presentation/components/logo'
import Header from '@/presentation/components/login-header'
import Footer from '@/presentation/components/footer'

const login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite seu email" />
          <span className={Styles.status}>🔴</span>
        </div>
        <div className={Styles.inputWrap}>
          <input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <span className={Styles.status}>🔴</span>
        </div>
        <button className={Styles.submit} type="submit">
          Entrar
        </button>

        <span className={Styles.link}>Criar Conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Erro</span>
        </div>
      </form>

      <Footer />
    </div>
  )
}

export default login
