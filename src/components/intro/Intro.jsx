import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import goToNextStep from '../home/Home.actions'

import Button from '../common/button/Button'

import styles from './Intro.module.scss'

const Intro = ({ boundGoToNextStep }) => (
  <div className={styles.wrapper}>
    <p className={styles.text}>Welcome to Giveaway App</p>
    <p className={styles.text}>We help you to randomly pick winners for your giveaway posts.</p>
    <Button
      type="button"
      label="Start"
      btnClass={styles.button}
      onClick={boundGoToNextStep}
    />
    <p className={styles.description}>
      * Currently we support only Instagram integration
    </p>
  </div>
)

Intro.propTypes = {
  boundGoToNextStep: PropTypes.func.isRequired,
}

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
}

export default connect(null, mapDispatchToProps)(Intro)
