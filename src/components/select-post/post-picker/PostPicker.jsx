import React from 'react'
import PropTypes from 'prop-types'

import styles from './PostPicker.module.scss'

const PostPicker = ({ posts, goToNextStep }) => (
  <div className={styles.wrapper}>
    <div className={styles.grid}>
      {
        posts.map(post => (
          <div
            key={post.id}
            className={styles.post}
            onClick={goToNextStep}
          >
            <img
              src={post.url}
              alt={post.caption}
              className={styles.image}
            />
          </div>
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
}

export default PostPicker
