import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../common/loader/Loader'
import Button from '../common/button/Button'
import InputNumber from '../common/input-number/InputNumber'
import Switch from '../common/switch/Switch'

import styles from './RulesSettings.module.scss'

class RulesSettings extends Component {
  state = {
    winnersNumber: 0,
    accountsTaggedNumber: 0,
  }

  decrementHandler = (value) => {
    this.setState((prevValue) => {
      if (prevValue[value] > 0) {
        return {
          [value]: prevValue[value] - 1,
        }
      }

      return null
    })
  }

  incrementHandler = (value) => {
    this.setState((prevValue) => {
      if (prevValue[value] < 10) {
        return {
          [value]: prevValue[value] + 1,
        }
      }

      return null
    })
  }

  decrementWinnersNumberHandler = () => {
    this.decrementHandler('winnersNumber')
  }

  incrementWinnersNumberHandler = () => {
    this.incrementHandler('winnersNumber')
  }

  decrementAccountsTaggedNumberHandler = () => {
    this.decrementHandler('accountsTaggedNumber')
  }

  incrementAccountsTaggedNumberHandler = () => {
    this.incrementHandler('accountsTaggedNumber')
  }

  renderOptions = (winnersNumber, accountsTaggedNumber) => (
    <div className="container">
      <div className={styles.control}>
        <p className={styles.label}>How many winners would you like to pick randomly?</p>
        <InputNumber
          value={winnersNumber}
          onDecrement={this.decrementWinnersNumberHandler}
          onIncrement={this.incrementWinnersNumberHandler}
        />
      </div>
      <div className={styles.control}>
        <p className={styles.label}>Winner should be following you?</p>
        <Switch />
      </div>
      <div className={styles.control}>
        <p className={styles.label}>Should winner follow some other accounts?</p>
        <Switch />
      </div>
      <div className={styles.control}>
        <p className={styles.label}>Winner needs to like the giveaway post?</p>
        <Switch />
      </div>
      <div className={styles.control}>
        <p className={styles.label}>Winner needs to leave a comment on that post?</p>
        <Switch />
      </div>
      <div className={styles.control}>
        <p className={styles.label}>Should winner tag someone in that comment?</p>
        <Switch />
      </div>
      <div className={styles.control}>
        <p className={styles.label}>How many accounts should be tagged?</p>
        <InputNumber
          value={accountsTaggedNumber}
          onDecrement={this.decrementAccountsTaggedNumberHandler}
          onIncrement={this.incrementAccountsTaggedNumberHandler}
        />
      </div>
      <Button
        type="button"
        label="Run"
        btnClass={styles.button}
      />
    </div>
  )


  render() {
    const { winnersNumber, accountsTaggedNumber } = this.state
    const { isLoading } = this.props

    return (
      <Fragment>
        {
          isLoading &&
          <Loader />
        }
        {
          !isLoading &&
          this.renderOptions(winnersNumber, accountsTaggedNumber)
        }
      </Fragment>
    )
  }
}

RulesSettings.propTypes = {
  isLoading: PropTypes.bool.isRequired,
}


const mapStateToProps = state => ({
  isLoading: state.postsReducer.selectedPost.isLoading,
})

export default connect(mapStateToProps)(RulesSettings)
