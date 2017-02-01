import React, { PropTypes } from 'react';

import s from './styles.scss';

function ListItem (props) {
  return (
    <li className={s.root}>
      <div className={s.item}>
        {props.item}
      </div>
    </li>
  );
}

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
