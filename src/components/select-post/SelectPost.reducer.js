import ACTION_TYPES from './SelectPost.actionTypes'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  posts: [],
  selectedPost: {},
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
    case ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_IN_PROGRESS:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          isLoading: true,
          comments: [],
          isError: false,
        },
      }
    case ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_SUCCESS:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          isLoading: false,
          comments: action.payload,
        },
      }
    case ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_ERROR:
      return {
        ...state,
        selectedPost: {
          ...state.selectedPost,
          isLoading: false,
          isError: true,
        },
      }
    default:
      return state
  }
}

export default postsReducer
