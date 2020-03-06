import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Intro from '../intro/Intro'
import SelectProfile from '../select-profile/select-profile'
import SelectPost from '../select-post/SelectPost'
import RulesSettings from '../rules-settings/RulesSettings'
import Results from '../results/Results'

import styles from './Picker.module.scss'

class Picker extends Component {
  state = {
    components: [
      <Intro />,
      <SelectProfile />,
      <SelectPost />,
      <RulesSettings />,
      <Results />,
    ],
  }

  renderComponentByStep = (step) => {
    const { components } = this.state
    return components[step]
  }

  render() {
    const { currentPage } = this.props

    return (
      <div className={styles.wrapper}>
        { this.renderComponentByStep(currentPage) }
      </div>
    )
  }
}

Picker.propTypes = {
  currentPage: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  currentPage: state.homeReducer.currentPage,
})

export default connect(mapStateToProps)(Picker)
