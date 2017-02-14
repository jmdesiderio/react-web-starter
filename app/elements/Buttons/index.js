import React, { PropTypes } from 'react'

import s from './styles.scss'

export const Button = ({ disabled, text }) => (
  <button className={s.button}
    disabled={disabled}>
    {text}
  </button>
)
Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string
}
Button.defaultProps = {
  text: 'Submit'
}
