import React, { Component } from 'react'

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Switch.module.scss'

class Switch extends Component {
  state = {
    on: false,
  }

  toggleSwitchState = () => this.setState(prevState => ({
    on: !prevState.on,
  }))

  render() {
    const { on } = this.state

    return (
      <div
        className={`${styles.switch} ${on ? styles.switchOn : styles.switchOff}`}
        onClick={this.toggleSwitchState}
      >
        {
          on ?
            (
              <FontAwesomeIcon
                className={styles.icon}
                icon={faCheck}
              />
            )
            : (
              <FontAwesomeIcon
                className={styles.icon}
                icon={faTimes}
              />
            )
        }
      </div>
    )
  }
}

export default Switch
