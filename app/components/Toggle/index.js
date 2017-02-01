import React, { PropTypes } from 'react';

import ToggleOption from '../ToggleOption';
import s from './styles.scss';

function Toggle (props) {
  let content = (<option>--</option>);

  // If we have items, render them
  if (props.values) {
    content = props.values.map(value => (
      <ToggleOption key={value} value={value} message={props.messages[value]} />
    ));
  }

  return (
    <select className={s.root} value={props.value} onChange={props.onToggle}>
      {content}
    </select>
  );
}

Toggle.propTypes = {
  onToggle: PropTypes.func,
  values: PropTypes.array,
  value: PropTypes.string,
  messages: PropTypes.object
};

export default Toggle;
