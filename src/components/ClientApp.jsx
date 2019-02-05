import React from 'react'
import { Router } from 'react-router-dom'
import { history } from '../redux/store/configureStore'

// - Root Components
import Routes from '../routing/Routes'

const ClientApp = () => (
  <Router history={history}>
    <Routes />
  </Router>
)

export default ClientApp
