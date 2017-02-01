import React, { PropTypes } from 'react';

import s from './styles.scss';

function List (props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  // If we have items, render them
  if (props.items) {
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className={s.root}>
      <ul className={s.list}>
        {content}
      </ul>
    </div>
  );
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default List;
