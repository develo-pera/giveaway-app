import ACTION_TYPES from './Home.actionTypes'

const INIT_STATE = {
  currentPage: 0,
  posts: [],
}

const homeReducer = (state = INIT_STATE, action) => {
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

export default homeReducer
