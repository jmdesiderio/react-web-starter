import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function NotFound () {
  return (
    <article>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    </article>
  );
}
