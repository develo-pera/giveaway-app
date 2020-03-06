import ACTION_TYPES from './Picker.actionTypes'

const INIT_STATE = {
  currentPage: 0,
}

const pickerReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT_CURRENT_PAGE_NUMBER:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }

    default:
      return state
  }
}

export default pickerReducer
