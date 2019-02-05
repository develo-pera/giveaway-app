import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import ClientApp from './components/ClientApp'

import './styles/main.scss'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <ClientApp />
  </Provider>
)

export default App
