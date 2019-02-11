import React from 'react'

import Button from '../common/button/Button'
import InputNumber from '../common/input-number/InputNumber'
import Switch from '../common/switch/Switch'

import styles from './RulesSettings.module.scss'

const RulesSettings = () => (
  <div className="container">
    <div className={styles.control}>
      <p className={styles.label}>How many winners would you like to pick randomly?</p>
      <InputNumber />
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
      <InputNumber />
    </div>
    <Button
      type="button"
      label="Run"
      btnClass={styles.button}
    />
  </div>
)

export default RulesSettings
