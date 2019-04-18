import ACTION_TYPES from './select-profile.actionTypes';

const INIT_STATE = {
  isLoading: false,
  isError: false,
  profiles: [],
}

const profilesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_USERS_INSTAGRAM_PROFILES_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
        profiles: [],
      }
    case ACTION_TYPES.FETCH_USERS_INSTAGRAM_PROFILES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profiles: action.payload,
      }
    case ACTION_TYPES.FETCH_USERS_INSTAGRAM_PROFILES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return INIT_STATE
  }
}

export default profilesReducer
