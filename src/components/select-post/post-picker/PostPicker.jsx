import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getDataForPhotoWithId } from '../SelectPost.actions'

import styles from './PostPicker.module.scss'

const PostPicker = ({ posts, goToNextStep, boundGetDataForPhotoWithId }) => (
  <div className={styles.wrapper}>
    <div className={styles.grid}>
      {
        posts.map(post => (
          <div
            key={post.id}
            className={styles.post}
            onClick={() => {
              boundGetDataForPhotoWithId(post.id)
              goToNextStep()
            }}
            style={{ backgroundImage: `url(${post.thumbnail_url || post.media_url})` }}
          />
        ))
      }
    </div>
  </div>
)

PostPicker.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  goToNextStep: PropTypes.func.isRequired,
  boundGetDataForPhotoWithId: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  boundGetDataForPhotoWithId: getDataForPhotoWithId,
}

export default connect(null, mapDispatchToProps)(PostPicker)
