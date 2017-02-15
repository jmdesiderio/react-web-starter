import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import Toggle from '../Toggle'
import { appLocales } from '../../i18n'
import { changeLocale } from '../../ducks/language'
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors'

import messages from './messages'
import s from './styles.scss'

const LocaleToggle = ({ locale, onLocaleToggle }) => (
  <div className={s.root}>
    <Toggle currentValue={locale}
      messages={messages}
      onToggle={onLocaleToggle}
      values={appLocales} />
  </div>
)

LocaleToggle.propTypes = {
  locale: PropTypes.string,
  onLocaleToggle: PropTypes.func
}

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale })
)

export function mapDispatchToProps (dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle)
