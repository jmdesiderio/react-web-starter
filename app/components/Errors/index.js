import React, { PropTypes } from 'react'

import s from './styles.scss'

const renderError = (error, index) => (
  <li key={index}>
    {error}
  </li>
)

const Errors = ({ list }) => (
  <ul className={s.root}>
    {list.map(renderError)}
  </ul>
)

Errors.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string)
}

export default Errors
