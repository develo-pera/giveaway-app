import ACTION_TYPES from './RulesSettings.actionTypes'

export const incrementHandler = valueToIncrement => ({
  type: ACTION_TYPES.INCREMENT,
  payload: valueToIncrement,
})

export const decrementHandler = valueToDecrement => ({
  type: ACTION_TYPES.DECREMENT,
  payload: valueToDecrement,
})

export const toggleSwitchHandler = switchToToggle => ({
  type: ACTION_TYPES.TOGGLE_SWITCH,
  payload: switchToToggle,
})
