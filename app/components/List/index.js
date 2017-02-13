import React, { PropTypes } from 'react';

import s from './styles.scss';

const List = ({ component, items }) => {
  const ComponentToRender = component;
  let content = (<div></div>);

  // If we have items, render them
  if (items) {
    content = items.map((item, index) => (
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
};

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array
};

export default List;
