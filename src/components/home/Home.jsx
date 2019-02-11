import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Intro from '../intro/Intro'
import SelectPost from '../select-post/SelectPost'
import RulesSettings from '../rules-settings/RulesSettings'

import styles from './Home.module.scss'

class Home extends Component {
  state = {
    components: [
      <Intro />,
      <SelectPost />,
      <RulesSettings />,
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

Home.propTypes = {
  currentPage: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  currentPage: state.homeReducer.currentPage,
})

export default connect(mapStateToProps)(Home)
