import React from 'react'
import PropTypes from 'prop-types'

const Emoji = ({ symbol, label }) => (
  <span
    className="emoji"
    role="img"
    aria-label={label}
    aria-hidden={label ? 'false' : 'true'}
    style={{ fontFamily: 'Segoe UI Emoji' }}
  >
    {symbol}
  </span>
)

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  label: PropTypes.string,
}

Emoji.defaultProps = {
  label: '',
}

export default Emoji
