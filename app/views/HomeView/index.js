import React, { PureComponent, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectRepos, makeSelectLoading, makeSelectError } from '../../containers/App/selectors';
import H2 from '../../components/H2';
import ReposList from '../../components/ReposList';
import { loadRepos } from '../../ducks/global';
import { changeUsername } from '../../ducks/home';
import { makeSelectUsername } from './selectors';

import messages from './messages';
import s from './styles.scss';

export class HomeView extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render () {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' }
          ]}
        />
        <div>
          <section className={s.centeredSection}>
            <H2>
              <FormattedMessage {...messages.startProjectHeader} />
            </H2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </section>
          <section className={s.section}>
            <H2>
              <FormattedMessage {...messages.trymeHeader} />
            </H2>
            <form className={s.form} onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <FormattedMessage {...messages.trymeMessage} />
                <span className={s.atPrefix}>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </span>
                <input
                  className={s.input}
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomeView.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};

export function mapDispatchToProps (dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos('jmdesiderio'));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
