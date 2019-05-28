import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../common/loader/Loader'
import getDataForPhotoWithId from './Results.actions'

const Results = ({
  isLoading,
  isError,
  photoId,
  boundGetDataForPhotoWithId,
}) => {
  useEffect(() => {
    boundGetDataForPhotoWithId(photoId)
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
  boundGetDataForPhotoWithId: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.resultsReducer.isLoading,
  isError: state.resultsReducer.isError,
  photoId: state.postsReducer.selectedPost.id,
})

const mapDispatchToProps = {
  boundGetDataForPhotoWithId: getDataForPhotoWithId,
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
