import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({
  label,
  type,
  onClick,
  disabled,
  btnClass,
}) => (
// eslint-disable-next-line react/button-has-type
  <button
    type={type}
    disabled={disabled}
    onClick={onClick}
    className={`${styles.button} ${btnClass} ${disabled ? styles.btnClassDisabled : ''}`}
  >
    {label}
  </button>

);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  btnClass: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  onClick: null,
  btnClass: null,
};

export default Button;
