import { combineReducers } from 'redux'

// - Reducers
import homeReducer from '../../components/home/Home.reducer'
import profilesReducer from '../../components/select-profile/select-profile.reducer'
import postsReducer from '../../components/select-post/SelectPost.reducer'

const rootReducer = combineReducers({
  homeReducer,
  profilesReducer,
  postsReducer,
})

export default rootReducer
