import React from 'react'
import { FormattedMessage } from 'react-intl'

import messages from './messages'

const NotFound = () => (
  <article>
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
  </article>
)

export default NotFound
