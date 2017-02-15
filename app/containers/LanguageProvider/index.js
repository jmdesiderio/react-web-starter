import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { IntlProvider } from 'react-intl'

import { makeSelectLocale } from './selectors'

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider key={locale}
    locale={locale}
    messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  messages: PropTypes.object // eslint-disable-line react/forbid-prop-types
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale })
)

export default connect(mapStateToProps)(LanguageProvider)
