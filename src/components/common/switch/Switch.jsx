import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Switch.module.scss'

class Switch extends Component {
  onSwitchClick = () => {
    const { name, onClick } = this.props
    if (onClick && name) {
      onClick(name)
    } else {
      throw new Error('Please add required attributes onClick and name');
    }
  }

  render() {
    const { value } = this.props

    return (
      <div
        className={`${styles.switch} ${value ? styles.switchOn : styles.switchOff}`}
        onClick={this.onSwitchClick}
      >
        {
          value ?
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

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
}

Switch.defaultProps = {
  value: false,
}

export default Switch
