import ACTION_TYPES from './Test.actionTypes';

const INIT_STATE = {
  data: 0,
};

export default function testReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        data: state.data + 1,
      };
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        data: state.data - 1,
      };
    default:
      return state;
  }
}
