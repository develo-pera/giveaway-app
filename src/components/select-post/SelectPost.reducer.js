import ACTION_TYPES from './SelectPost.actionTypes'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  posts: [],
}

const postsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USERS_INSTAGRAM_PHOTOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        posts: [],
      }
    case ACTION_TYPES.FETCH_USERS_INSTAGRAM_PHOTOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      }
    default:
      return state
  }
}

export default postsReducer
