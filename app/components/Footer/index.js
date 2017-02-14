import React from 'react'
import { FormattedMessage } from 'react-intl'

import LocaleToggle from '../LocaleToggle'

import messages from './messages'
import s from './styles.scss'

const Footer = () => (
  <footer className={s.root}>
    <section>
      <FormattedMessage {...messages.licenseMessage} />
    </section>
    <section>
      <LocaleToggle />
    </section>
    <section>
      <FormattedMessage {...messages.authorMessage}
        values={{
          author: <a href='https://twitter.com/mxstbr'>Max Stoiber</a>
        }} />
    </section>
  </footer>
)

export default Footer
