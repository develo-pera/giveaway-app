import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import axios from 'axios'

import { API_ROUTES } from '../../routing/ApiRoutes';
import saveFacebookAccessTokenToLocalStorage from './Intro.helpers'
import goToNextStep from '../home/Home.actions'

import Button from '../common/button/Button'

import styles from './Intro.module.scss'

class Intro extends Component {
  async componentDidMount() {
    const { location, history, boundGoToNextStep } = this.props
    if (location.hash) {
      await saveFacebookAccessTokenToLocalStorage(location.hash)
      axios.defaults.headers.common.Authorization = `Bearer ${JSON.parse(localStorage.getItem('fbToken')).access_token}`
      await history.push('/')
      await boundGoToNextStep()
    }
  }

  render() {
    const clientId = process.env.REACT_APP_FACEBOOK_CLIENT_ID
    const redirectUri = process.env.REACT_APP_FACEBOOK_REDIRECT_URI
    const crfProtection = process.env.REACT_APP_CRF_PROTECTION
    const facebookLoginUrl = `${API_ROUTES.FACEBOOK_OAUTH_LINK}client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&state="${crfProtection}"`

    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>Welcome to Giveaway App</p>
        <p className={styles.text}>We help you to randomly pick winners for your giveaway posts.</p>
        <a href={facebookLoginUrl}>
          <Button
            type="button"
            label="Start"
            btnClass={styles.button}
          />
        </a>
        <p className={styles.description}>
          * Currently we support only Instagram integration
        </p>
      </div>
    )
  }
}

Intro.propTypes = {
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
  boundGoToNextStep: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
}

export default withRouter(connect(null, mapDispatchToProps)(Intro))
