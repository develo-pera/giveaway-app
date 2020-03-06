import { combineReducers } from 'redux'

// - Reducers
import pickerReducer from '../../components/picker/Picker.reducer'
import profilesReducer from '../../components/select-profile/select-profile.reducer'
import postsReducer from '../../components/select-post/SelectPost.reducer'
import rulesReducer from '../../components/rules-settings/RulesSettings.reducer'
import resultsReducer from '../../components/results/Results.reducer'

const rootReducer = combineReducers({
  homeReducer: pickerReducer,
  profilesReducer,
  postsReducer,
  rulesReducer,
  resultsReducer,
})

export default rootReducer
