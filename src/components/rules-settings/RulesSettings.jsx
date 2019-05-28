import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../common/loader/Loader'
import Button from '../common/button/Button'
import InputNumber from '../common/input-number/InputNumber'
import Switch from '../common/switch/Switch'
import goToNextStep from '../home/Home.actions';

import styles from './RulesSettings.module.scss'

class RulesSettings extends Component {
  state = {
    winnersNumber: 0,
    winnersShouldFollowMe: false,
    shouldWinnersFollowOthers: false,
    winnersNeedToLikePost: false,
    winnersNeedToLeaveAComment: false,
    winnersShouldTagOthers: false,
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

  onSwitchClick = (switchClicked) => {
    this.setState(prevValue => ({
      [switchClicked]: !prevValue[switchClicked],
    }))
  }

  render() {
    const {
      winnersNumber,
      winnersShouldFollowMe,
      shouldWinnersFollowOthers,
      winnersNeedToLikePost,
      winnersNeedToLeaveAComment,
      winnersShouldTagOthers,
      accountsTaggedNumber,
    } = this.state
    const { isLoading, boundGoToNextStep } = this.props

    return (
      <Fragment>
        {
          isLoading &&
          <Loader />
        }
        {
          !isLoading &&
          (
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
                <Switch
                  name="winnersShouldFollowMe"
                  value={winnersShouldFollowMe}
                  onClick={this.onSwitchClick}
                />
              </div>
              <div className={styles.control}>
                <p className={styles.label}>Should winner follow some other accounts?</p>
                <Switch
                  name="shouldWinnersFollowOthers"
                  value={shouldWinnersFollowOthers}
                  onClick={this.onSwitchClick}
                />
              </div>
              <div className={styles.control}>
                <p className={styles.label}>Winner needs to like the giveaway post?</p>
                <Switch
                  name="winnersNeedToLikePost"
                  value={winnersNeedToLikePost}
                  onClick={this.onSwitchClick}
                />
              </div>
              <div className={styles.control}>
                <p className={styles.label}>Winner needs to leave a comment on that post?</p>
                <Switch
                  name="winnersNeedToLeaveAComment"
                  value={winnersNeedToLeaveAComment}
                  onClick={this.onSwitchClick}
                />
              </div>
              <div className={styles.control}>
                <p className={styles.label}>Should winner tag someone in that comment?</p>
                <Switch
                  name="winnersShouldTagOthers"
                  value={winnersShouldTagOthers}
                  onClick={this.onSwitchClick}
                />
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
                onClick={boundGoToNextStep}
              />
            </div>
          )
        }
      </Fragment>
    )
  }
}

RulesSettings.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  boundGoToNextStep: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.postsReducer.selectedPost.isLoading,
})

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
}

export default connect(mapStateToProps, mapDispatchToProps)(RulesSettings)
