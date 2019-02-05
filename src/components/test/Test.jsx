import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import { increment, decrement } from './Test.actions'

import styles from './Test.module.scss'

const Test = ({ counter, boundIncrement, boundDecrement }) => (
  <div>
    <p className={styles.headline}>Test component</p>
    <p>
      Counter:
      {' '}
      {counter}
    </p>
    <button
      type="button"
      onClick={boundIncrement}
    >
      Increment this
    </button>
    <button
      type="button"
      onClick={boundDecrement}
    >
      Decrement
    </button>
  </div>
)

Test.propTypes = {
  counter: PropTypes.number.isRequired,
  boundIncrement: PropTypes.func.isRequired,
  boundDecrement: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  counter: state.test.data,
})

const mapDispatchToProps = {
  boundIncrement: increment,
  boundDecrement: decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
