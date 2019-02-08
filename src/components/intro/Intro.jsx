import React from 'react'

import Button from '../common/button/Button'

import styles from './Intro.module.scss'

const Intro = () => (
  <div className={styles.wrapper}>
    <p className={styles.text}>Welcome to Giveaway App</p>
    <p className={styles.text}>We help you to randomly pick winners for your giveaway posts.</p>
    <Button
      type="button"
      label="Start"
    />
  </div>
)

export default Intro
