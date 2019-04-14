import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import goToNextStep from '../home/Home.actions'

import Emoji from '../common/emoji/Emoji'
import PostPicker from './post-picker/PostPicker'

import styles from './SelectPost.module.scss'

const renderPostPicker = (posts, goToNextStepHandler) => (
  <div>
    <p className={styles.title}>Please select the post you wish to run the giveaway on:</p>
    <PostPicker
      posts={posts}
      goToNextStep={goToNextStepHandler}
    />
  </div>
)

const renderNoPostsMessage = () => (
  <div className={styles.noPostsMessageWrapper}>
    <Emoji
      symbol="🙈"
    />
    <p className={styles.text}>Looks like you have no published posts yet</p>
  </div>
)

const SelectPost = ({ posts, boundGoToNextStep }) => (
  <div className="container">
    {
      posts.length > 0 ? renderPostPicker(posts, boundGoToNextStep) : renderNoPostsMessage()
    }
  </div>
)

SelectPost.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  boundGoToNextStep: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  posts: state.postsReducer.posts,
})

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPost)
