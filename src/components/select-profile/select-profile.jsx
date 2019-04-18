import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import getUserInstagramProfiles from './select-profile.actions';


import styles from './select-profile.module.scss'
import Emoji from '../common/emoji/Emoji';

class SelectProfile extends React.Component {
  componentDidMount() {
    const { boundGetUserInstagramProfiles } = this.props
    boundGetUserInstagramProfiles();
  }

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
    } = this.props

    return (
      <div>
        {
          isLoading &&
            'Loading'
        }
        {
          isError &&
            'Jebi ga'
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
                    <div className={styles.card}>
                      <img
                        className={styles.profileImage}
                        src={profile.profile_picture_url}
                        alt={profile.username}
                      />
                      <div>
                        <p className={styles.text}>{ `@${profile.username}` }</p>
                        <p className={styles.text}>{ profile.name }</p>
                        <p className={styles.text}>{ profile.followers_count }</p>
                        <p className={styles.text}>{ profile.follows_count }</p>
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
  boundGetUserInstagramProfiles: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.profilesReducer.isLoading,
  instagramProfiles: state.profilesReducer.profiles,
  isError: state.profilesReducer.isError,
})

const mapDispatchToProps = {
  boundGetUserInstagramProfiles: getUserInstagramProfiles,
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectProfile)
