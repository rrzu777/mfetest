import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// import MarketingApp from './components/MarketingApp'
// import AuthApp from './components/AuthApp'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
const AuthLazy = lazy(() => import('./components/AuthApp'))
const MarketingLazy = lazy(() => import('./components/MarketingApp'))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co-'
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              <Route path='/auth'>
                <AuthLazy isSignedIn={isSignedIn} onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path='/'>
                <MarketingLazy isSignedIn={isSignedIn} />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  )
}