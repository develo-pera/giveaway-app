import ACTION_TYPES from './Picker.actionTypes'

const dispatchIncrementCurrentPage = () => ({
  type: ACTION_TYPES.INCREMENT_CURRENT_PAGE_NUMBER,
})

const goToNextStep = () => (
  dispatchIncrementCurrentPage()
)

export default goToNextStep
