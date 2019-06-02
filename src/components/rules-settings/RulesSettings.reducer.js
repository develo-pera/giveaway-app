import ACTION_TYPES from './RulesSettings.actionTypes'

export const INIT_STATE = {
  winnersNumber: 0,
  winnersShouldFollowMe: false,
  shouldWinnersFollowOthers: false,
  winnersNeedToLikePost: false,
  winnersNeedToLeaveAComment: false,
  winnersShouldTagOthers: false,
  accountsTaggedNumber: 0,
}

const rulesReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        [action.payload]: state[action.payload] < 10 ? state[action.payload] + 1 : 10,
      }
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        [action.payload]: state[action.payload] > 0 ? state[action.payload] - 1 : 0,
      }
    case ACTION_TYPES.TOGGLE_SWITCH:
      return {
        ...state,
        [action.payload]: !state[action.payload],
      }
    default:
      return state
  }
}

export default rulesReducer
