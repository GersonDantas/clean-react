import { SignUp } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

type Props = {
  makeLogin: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={makeLogin} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
