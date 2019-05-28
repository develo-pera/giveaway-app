import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectPhotoWithId } from '../SelectPost.actions';

import styles from './PostPicker.module.scss'

const PostPicker = ({ posts, goToNextStep, boundSelectPhotoWithId }) => (
  <div className={styles.wrapper}>
    <div className={styles.grid}>
      {
        posts.map(post => (
          <div
            key={post.id}
            className={styles.post}
            onClick={() => {
              boundSelectPhotoWithId('18036147784041159')
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
  boundSelectPhotoWithId: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  boundSelectPhotoWithId: selectPhotoWithId,
}

export default connect(null, mapDispatchToProps)(PostPicker)
