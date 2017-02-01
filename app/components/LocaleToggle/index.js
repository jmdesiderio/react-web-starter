import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Toggle from '../Toggle';
import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../../ducks/language';
import { makeSelectLocale } from '../../containers/LanguageProvider/selectors';
import s from './styles.scss';

export class LocaleToggle extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <div className={s.root}>
        <Toggle value={this.props.locale} values={appLocales} messages={messages} onToggle={this.props.onLocaleToggle} />
      </div>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  locale => ({ locale })
);

export function mapDispatchToProps (dispatch) {
  return {
    onLocaleToggle: evt => dispatch(changeLocale(evt.target.value)),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LocaleToggle);
