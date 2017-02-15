import React, { PropTypes } from 'react'

import s from './styles.scss'

const List = ({ component, items }) => {
  const ComponentToRender = component
  let content = (<div />)

  // If we have items, render them
  if (items) {
    content = items.map(item => (
      <ComponentToRender item={item} key={item.id} />
    ))
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />)
  }

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {content}
      </ul>
    </div>
  )
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object)
}

export default List
