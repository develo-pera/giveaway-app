import ACTION_TYPES from './Home.actionTypes'

const dispatchIncrementCurrentPage = () => ({
  type: ACTION_TYPES.INCREMENT_CURRENT_PAGE_NUMBER,
})

const goToNextStep = () => (
  dispatchIncrementCurrentPage()
)

export default goToNextStep
