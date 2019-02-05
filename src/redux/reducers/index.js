import { combineReducers } from 'redux'

// - Reducers
import testReducer from '../../components/test/Test.reducer'

const rootReducer = combineReducers({
  test: testReducer,
})

export default rootReducer
