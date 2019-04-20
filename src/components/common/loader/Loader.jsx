import React from 'react'

import styles from './Loader.module.scss'

const Loader = () => (
  <div className={styles.loader}>
    <div
      className={styles.circle}
    />
    <div
      className={styles.circle}
    />
    <div
      className={styles.circle}
    />
  </div>
)

export default Loader
