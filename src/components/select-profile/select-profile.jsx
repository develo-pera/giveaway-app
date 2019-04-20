import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import goToNextStep from '../home/Home.actions'
import getUserInstagramProfiles from './select-profile.actions'
import Loader from '../common/loader/Loader'
import Emoji from '../common/emoji/Emoji'
import DefaultPhoto from '../../assets/images/default-profile-photo.jpg'

import styles from './select-profile.module.scss'


class SelectProfile extends React.Component {
  componentDidMount() {
    const { boundGetUserInstagramProfiles } = this.props
    boundGetUserInstagramProfiles();
  }

  renderErrorMessage = () => (
    <div className={styles.noPostsMessageWrapper}>
      <Emoji
        symbol=" 🤷🏻‍♂️"
      />
      <p className={`${styles.text} ${styles.error}`}>
        Unexpected error occurred and we can't fetch your instagram accounts, please try later
      </p>
    </div>
  )

  renderNoProfilesMessage = () => (
    <div className={styles.noPostsMessageWrapper}>
      <Emoji
        symbol="🙈"
      />
      <p className={styles.text}>
        Looks like you have no instagram accounts associated with your facebook profile
      </p>
    </div>
  )

  render() {
    const {
      isLoading,
      instagramProfiles,
      isError,
      boundGoToNextStep,
    } = this.props

    return (
      <div className={styles.container}>
        {
          isLoading &&
          <Loader />
        }
        {
          isError &&
          this.renderErrorMessage()
        }
        {
          !isLoading &&
          !isError &&
          instagramProfiles.length === 0 &&
          this.renderNoProfilesMessage()
        }
        {
          !isLoading &&
          !isError &&
          instagramProfiles.length > 0 &&
          (
            <React.Fragment>
              <p className={styles.title}>Select profile:</p>
              <div className={styles.profilesGrid}>
                {
                  instagramProfiles.map(profile => (
                    <div
                      onClick={boundGoToNextStep}
                      className={styles.card}
                    >
                      <img
                        className={styles.profileImage}
                        src={
                          profile.profile_picture_url ||
                          DefaultPhoto
                        }
                        alt={profile.username}
                      />
                      <div>
                        <p className={styles.text}>{ `@${profile.username}` }</p>
                        <p className={styles.text}>{ profile.name }</p>
                        <p className={styles.text}>
                          Followers:
                          {' '}
                          { profile.followers_count }
                        </p>
                        <p className={styles.text}>
                          Follows:
                          {' '}
                          { profile.follows_count }
                        </p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </React.Fragment>
          )
        }
      </div>
    )
  }
}

SelectProfile.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  instagramProfiles: PropTypes.arrayOf().isRequired,
  isError: PropTypes.bool.isRequired,
  boundGoToNextStep: PropTypes.func.isRequired,
  boundGetUserInstagramProfiles: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.profilesReducer.isLoading,
  instagramProfiles: state.profilesReducer.profiles,
  isError: state.profilesReducer.isError,
})

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
  boundGetUserInstagramProfiles: getUserInstagramProfiles,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectProfile)
