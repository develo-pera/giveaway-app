import React from 'react'
import PropTypes from 'prop-types'

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './InputNumber.module.scss'

const InputNumber = ({
  value,
  onIncrement,
  onDecrement,
  disabled,
}) => (
  <div className={styles.input}>
    <div
      className={!disabled ? styles.decrementButton : styles.decrementButtonDisabled}
      onClick={!disabled && onDecrement}
    >
      <FontAwesomeIcon icon={faMinus} />
    </div>
    <div className={styles.numberInput}>
      {value}
    </div>
    <div
      className={!disabled ? styles.incrementButton : styles.incrementButtonDisabled}
      onClick={!disabled && onIncrement}
    >
      <FontAwesomeIcon icon={faPlus} />
    </div>
  </div>
)

InputNumber.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

InputNumber.defaultProps = {
  disabled: false,
}

export default InputNumber
