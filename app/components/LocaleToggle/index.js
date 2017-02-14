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
      values={appLocales}
      messages={messages}
      onToggle={onLocaleToggle} />
  </div>
)

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string
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
