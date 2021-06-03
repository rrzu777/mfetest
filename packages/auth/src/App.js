import React from 'react'
import { Switch, Router, Route, Link } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import Signin from './components/Signin'
import Signup from './components/Signup'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au-'
})

const App = ({ history, onSignIn }) => {
  console.log({ history })
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <ul>
          <li><Link to="/auth">signin</Link></li>
          <li><Link to="/auth/signup">signup</Link></li>
        </ul>
          <Route path='/auth'>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path='/auth/signup'>
            <Signup onSignIn={onSignIn} />
          </Route>
      </Router>
    </StylesProvider>
  )
}

export default App