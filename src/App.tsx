import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { kebabCase } from 'lodash'
import { RecoilRoot } from 'recoil'
import './App.scss'

function Routes() {
  const context = require.context('./pages', true, /index\.tsx$/)
  const keys = context.keys()
  const pages = keys.map((key) => {
    const path = kebabCase(key.replace('index.tsx', ''))
    const Page = context(key).default
    return (
      <Route path={`/${path}`} key={path}>
        <Page />
      </Route>
    )
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect
            to={{
              pathname: '/home'
            }}
          />
        </Route>
        {pages}
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Routes />
      </RecoilRoot>
    </div>
  )
}
