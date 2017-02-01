import React, { PropTypes } from 'react';

import s from './styles.scss';

export const Errors = ({ list }) => (
  <ul className={s.root}>
    {list.map((error, index) => <li key={index}>{error}</li>)}
  </ul>
);
Errors.propTypes = {
  list: PropTypes.array.isRequired
};
