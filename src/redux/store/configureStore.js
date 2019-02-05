import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

// - Reducers | Middleware | Enhancers
import createHistory from './history'
import rootReducer from '../reducers/index'
import loggerMiddleware from '../middleware/logger'
import monitorReducersEnhancer from '../enhancers/monitorReducer'

export const history = createHistory()

function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}

export default configureStore
