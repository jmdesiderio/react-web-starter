import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';

import Img from '../../elements/Img';
import Banner from './banner.jpg';
import messages from './messages';
import s from './styles.scss';

class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div>
        <a className={s.a} href="https://twitter.com/mxstbr">
          <Img className={s.img} src={Banner} alt="react-boilerplate - Logo" />
        </a>
        <div className={s.navBar}>
          <Link className={s.link} to="/">
            <FormattedMessage {...messages.home} />
          </Link>
          <Link className={s.link} to="/features">
            <FormattedMessage {...messages.features} />
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
