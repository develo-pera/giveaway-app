import React from 'react'
import PropTypes from 'prop-types'

import styles from './PostPicker.module.scss'

const PostPicker = ({ posts }) => (
  <div className={styles.wrapper}>
    <div className={styles.grid}>
      {
        posts.map(post => (
          <img key={post.id} src={post.url} alt={post.caption} />
        ))
      }
    </div>
  </div>
)

PostPicker.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
}

export default PostPicker
