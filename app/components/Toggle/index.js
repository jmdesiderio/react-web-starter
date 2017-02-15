import React, { PropTypes } from 'react'

import ToggleOption from '../ToggleOption'

import s from './styles.scss'

const Toggle = ({ currentValue, messages, onToggle, values }) => {
  let content = (<option>--</option>)

  if (values) {
    content = values.map(value => (
      <ToggleOption key={value} message={messages[value]} value={value} />
    ))
  }

  return (
    <select className={s.root} onChange={onToggle} value={currentValue}>
      {content}
    </select>
  )
}

Toggle.propTypes = {
  currentValue: PropTypes.string,
  messages: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onToggle: PropTypes.func,
  values: PropTypes.arrayOf(PropTypes.string)
}

export default Toggle
