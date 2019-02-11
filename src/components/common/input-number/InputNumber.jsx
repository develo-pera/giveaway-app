import React from 'react'

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './InputNumber.module.scss'

const InputNumber = () => (
  <div className={styles.input}>
    <div className={styles.decrementButton}>
      <FontAwesomeIcon icon={faMinus} />
    </div>
    <div className={styles.numberInput}>0</div>
    <div className={styles.incrementButton}>
      <FontAwesomeIcon icon={faPlus} />
    </div>
  </div>
)

export default InputNumber
