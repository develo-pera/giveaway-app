import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../common/loader/Loader'
import pickWinnersWhoSatisfyRules from './Results.actions'

const Results = ({
  isLoading,
  isError,
  photoId,
  boundPickWinnersWhoSatisfyRules,
  rulesSettings,
}) => {
  useEffect(() => {
    boundPickWinnersWhoSatisfyRules(photoId, rulesSettings)
  }, [])

  return (
    <div>
      {
        isLoading &&
        <Loader />
      }
      {
        !isLoading &&
        !isError &&
        <p>Results</p>
      }
    </div>
  )
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  photoId: PropTypes.string.isRequired,
  boundPickWinnersWhoSatisfyRules: PropTypes.func.isRequired,
  rulesSettings: PropTypes.shape({
    winnersNumber: PropTypes.number.isRequired,
    winnersShouldFollowMe: PropTypes.bool.isRequired,
    shouldWinnersFollowOthers: PropTypes.bool.isRequired,
    winnersNeedToLikePost: PropTypes.bool.isRequired,
    winnersNeedToLeaveAComment: PropTypes.bool.isRequired,
    winnersShouldTagOthers: PropTypes.bool.isRequired,
    accountsTaggedNumber: PropTypes.number.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.resultsReducer.isLoading,
  isError: state.resultsReducer.isError,
  photoId: state.postsReducer.selectedPost.id,
  rulesSettings: state.rulesReducer,
})

const mapDispatchToProps = {
  boundPickWinnersWhoSatisfyRules: pickWinnersWhoSatisfyRules,
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
