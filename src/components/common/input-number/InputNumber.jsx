import React from 'react'
import PropTypes from 'prop-types'

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './InputNumber.module.scss'

const InputNumber = ({ value, onIncrement, onDecrement }) => (
  <div className={styles.input}>
    <div
      className={styles.decrementButton}
      onClick={onDecrement}
    >
      <FontAwesomeIcon icon={faMinus} />
    </div>
    <div className={styles.numberInput}>
      {value}
    </div>
    <div
      className={styles.incrementButton}
      onClick={onIncrement}
    >
      <FontAwesomeIcon icon={faPlus} />
    </div>
  </div>
)

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default InputNumber
