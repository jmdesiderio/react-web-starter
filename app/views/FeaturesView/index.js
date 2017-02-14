import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import s from './styles.scss';

const FeaturesView = () => (
  <div>
    <Helmet title="Feature Page"
      meta={[
        { name: 'description', content: 'Feature page of React.js Boilerplate application' }
      ]} />
    <h1>
      <FormattedMessage {...messages.header} />
    </h1>
    <ul className={s.list}>
      <li className={s.listItem}>
        <p className={s.listItemTitle}>
          <FormattedMessage {...messages.scaffoldingHeader} />
        </p>
        <p>
          <FormattedMessage {...messages.scaffoldingMessage} />
        </p>
      </li>

      <li className={s.listItem}>
        <p className={s.listItemTitle}>
          <FormattedMessage {...messages.feedbackHeader} />
        </p>
        <p>
          <FormattedMessage {...messages.feedbackMessage} />
        </p>
      </li>

      <li className={s.listItem}>
        <p className={s.listItemTitle}>
          <FormattedMessage {...messages.routingHeader} />
        </p>
        <p>
          <FormattedMessage {...messages.routingMessage} />
        </p>
      </li>

      <li className={s.listItem}>
        <p className={s.listItemTitle}>
          <FormattedMessage {...messages.networkHeader} />
        </p>
        <p>
          <FormattedMessage {...messages.networkMessage} />
        </p>
      </li>

      <li className={s.listItem}>
        <p className={s.listItemTitle}>
          <FormattedMessage {...messages.intlHeader} />
        </p>
        <p>
          <FormattedMessage {...messages.intlMessage} />
        </p>
      </li>
    </ul>
  </div>
);

export default FeaturesView;
