import { combineReducers } from 'redux'

// - Reducers
import homeReducer from '../../components/home/Home.reducer'
import postsReducer from '../../components/select-post/SelectPost.reducer'

const rootReducer = combineReducers({
  homeReducer,
  postsReducer,
})

export default rootReducer
