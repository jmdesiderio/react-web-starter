import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { IntlProvider } from 'react-intl'

import { makeSelectLocale } from './selectors'

const LanguageProvider = ({ locale, messages, children }) => (
  <IntlProvider locale={locale}
    key={locale}
    messages={messages[locale]}>
    {React.Children.only(children)}
  </IntlProvider>
)

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.string,
  messages: PropTypes.object
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale })
)

export default connect(mapStateToProps)(LanguageProvider)
