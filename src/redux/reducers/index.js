import { combineReducers } from 'redux'

// - Reducers
import homeReducer from '../../components/home/Home.reducer'

const rootReducer = combineReducers({
  homeReducer,
})

export default rootReducer
