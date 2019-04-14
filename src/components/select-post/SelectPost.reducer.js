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
    default:
      return INIT_STATE
  }
}

export default postsReducer
