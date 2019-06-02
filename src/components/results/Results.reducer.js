import ACTION_TYPES from './Results.actionTypes'

const INIT_STATE = {
  isLoading: false,
  isError: false,
  resultsData: {},
}

const resultsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        resultsData: {},
        isError: false,
      }
    case ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resultsData: action.payload,
      }
    case ACTION_TYPES.FETCH_INSTAGRAM_PHOTO_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        resultsData: {},
        isError: true,
      }
    default:
      return state
  }
}

export default resultsReducer
