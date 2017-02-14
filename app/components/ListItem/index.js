import React, { PropTypes } from 'react'

import s from './styles.scss'

const ListItem = ({ item }) => (
  <li className={s.root}>
    <div className={s.item}>
      {item}
    </div>
  </li>
)

ListItem.propTypes = {
  item: PropTypes.any
}

export default ListItem
