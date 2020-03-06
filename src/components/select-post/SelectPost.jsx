import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import goToNextStep from '../picker/Picker.actions'

import Emoji from '../common/emoji/Emoji'
import PostPicker from './post-picker/PostPicker'

import styles from './SelectPost.module.scss'
import Loader from '../common/loader/Loader';

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

const SelectPost = ({ isLoading, posts, boundGoToNextStep }) => (
  <div className="container">
    {
      isLoading &&
      <Loader />
    }
    {
      !isLoading &&
      posts.length > 0 &&
      renderPostPicker(posts, boundGoToNextStep)
    }
    {
      !isLoading &&
      posts.length === 0 &&
      renderNoPostsMessage()
    }
  </div>
)

SelectPost.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
  boundGoToNextStep: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.postsReducer.isLoading,
  posts: state.postsReducer.posts,
})

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPost)
