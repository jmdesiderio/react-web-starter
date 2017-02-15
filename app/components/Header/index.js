import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router'

import { Img } from '../../elements/Imgs'

import Banner from './banner.jpg'
import messages from './messages'
import s from './styles.scss'

const Header = () => (
  <div>
    <a className={s.a} href='https://twitter.com/mxstbr'>
      <Img alt='react-boilerplate - Logo'
        className={s.img}
        src={Banner} />
    </a>
    <div className={s.navBar}>
      <Link className={s.link} to='/'>
        <FormattedMessage {...messages.home} />
      </Link>
      <Link className={s.link} to='/features'>
        <FormattedMessage {...messages.features} />
      </Link>
      <Link className={s.link} to='/login'>
        <FormattedMessage {...messages.login} />
      </Link>
    </div>
  </div>
)

export default Header
