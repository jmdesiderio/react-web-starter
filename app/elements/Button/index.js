import React, { PropTypes, Children } from 'react';

import s from './styles.scss';

function Button (props) {
  let button = (
    <a className={s.button} href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </a>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <button className={s.button} onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </button>
    );
  }

  return (
    <div className={s.root}>
      {button}
    </div>
  );
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Button;
