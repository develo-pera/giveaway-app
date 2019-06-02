import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Loader from '../common/loader/Loader'
import Button from '../common/button/Button'
import InputNumber from '../common/input-number/InputNumber'
import Switch from '../common/switch/Switch'
import goToNextStep from '../home/Home.actions';
import { decrementHandler, incrementHandler, toggleSwitchHandler } from './RulesSettings.actions'

import styles from './RulesSettings.module.scss'

class RulesSettings extends Component {
  decrementWinnersNumberHandler = () => {
    const { boundDecrementHandler } = this.props
    boundDecrementHandler('winnersNumber')
  }

  incrementWinnersNumberHandler = () => {
    const { boundIncrementHandler } = this.props
    boundIncrementHandler('winnersNumber')
  }

  decrementAccountsTaggedNumberHandler = () => {
    const { boundDecrementHandler } = this.props
    boundDecrementHandler('accountsTaggedNumber')
  }

  incrementAccountsTaggedNumberHandler = () => {
    const { boundIncrementHandler } = this.props
    boundIncrementHandler('accountsTaggedNumber')
  }

  onSwitchClick = (switchClicked) => {
    const { boundToggleSwitchHandler } = this.props
    boundToggleSwitchHandler(switchClicked)
  }

  render() {
    const {
      isLoading,
      boundGoToNextStep,
      winnersNumber,
      winnersShouldFollowMe,
      shouldWinnersFollowOthers,
      winnersNeedToLikePost,
      winnersNeedToLeaveAComment,
      winnersShouldTagOthers,
      accountsTaggedNumber,
    } = this.props

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
  boundIncrementHandler: PropTypes.func.isRequired,
  boundDecrementHandler: PropTypes.func.isRequired,
  boundToggleSwitchHandler: PropTypes.func.isRequired,
  winnersNumber: PropTypes.number.isRequired,
  winnersShouldFollowMe: PropTypes.bool.isRequired,
  shouldWinnersFollowOthers: PropTypes.bool.isRequired,
  winnersNeedToLikePost: PropTypes.bool.isRequired,
  winnersNeedToLeaveAComment: PropTypes.bool.isRequired,
  winnersShouldTagOthers: PropTypes.bool.isRequired,
  accountsTaggedNumber: PropTypes.number.isRequired,
}

const mapStateToProps = state => ({
  isLoading: state.postsReducer.selectedPost.isLoading,
  winnersNumber: state.rulesReducer.winnersNumber,
  winnersShouldFollowMe: state.rulesReducer.winnersShouldFollowMe,
  shouldWinnersFollowOthers: state.rulesReducer.shouldWinnersFollowOthers,
  winnersNeedToLikePost: state.rulesReducer.winnersNeedToLikePost,
  winnersNeedToLeaveAComment: state.rulesReducer.winnersNeedToLeaveAComment,
  winnersShouldTagOthers: state.rulesReducer.winnersShouldTagOthers,
  accountsTaggedNumber: state.rulesReducer.accountsTaggedNumber,
})

const mapDispatchToProps = {
  boundGoToNextStep: goToNextStep,
  boundIncrementHandler: incrementHandler,
  boundDecrementHandler: decrementHandler,
  boundToggleSwitchHandler: toggleSwitchHandler,
}

export default connect(mapStateToProps, mapDispatchToProps)(RulesSettings)
