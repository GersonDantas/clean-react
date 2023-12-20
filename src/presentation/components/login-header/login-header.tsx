import Styles from './login-header-styles.scss'
import Logo from '@/presentation/components/logo/logo'

import React, { memo } from 'react'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.headerWrap}>
      <Logo />
      <h1>4Dev - Enquetes para programadores</h1>
    </header>
  )
}

export default memo(LoginHeader)
