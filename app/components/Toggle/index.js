import React, { PropTypes } from 'react';

import ToggleOption from '../ToggleOption';
import s from './styles.scss';

const Toggle = ({ currentValue, messages, onToggle, values }) => {
  let content = (<option>--</option>);

  if (values) {
    content = values.map(value => (
      <ToggleOption key={value} value={value} message={messages[value]} />
    ));
  }

  return (
    <select className={s.root} value={currentValue} onChange={onToggle}>
      {content}
    </select>
  );
};

Toggle.propTypes = {
  currentValue: PropTypes.string,
  messages: PropTypes.object,
  onToggle: PropTypes.func,
  values: PropTypes.array,
};

export default Toggle;
