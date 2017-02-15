import React, { PureComponent, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { makeSelectRepos, makeSelectLoading, makeSelectError } from '../../containers/App/selectors'
import ReposList from '../../components/ReposList'
import { loadRepos } from '../../ducks/global'
import { changeUsername } from '../../ducks/home'

import { makeSelectUsername } from './selectors'
import messages from './messages'
import s from './styles.scss'

export class HomeView extends PureComponent {
  componentDidMount () {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm()
    }
  }

  render () {
    const { loading, error, repos } = this.props
    const reposListProps = {
      loading,
      error,
      repos
    }

    return (
      <article>
        <Helmet meta={[{ name: 'description', content: 'A React.js Boilerplate application homepage' }]}
          title='Home Page' />
        <div>
          <section className={s.centeredSection}>
            <h2>
              <FormattedMessage {...messages.startProjectHeader} />
            </h2>
            <p>
              <FormattedMessage {...messages.startProjectMessage} />
            </p>
          </section>
          <section className={s.section}>
            <h2>
              <FormattedMessage {...messages.trymeHeader} />
            </h2>
            <form className={s.form} onSubmit={this.props.onSubmitForm}>
              <label htmlFor='username'>
                <FormattedMessage {...messages.trymeMessage} />
                <span className={s.atPrefix}>
                  <FormattedMessage {...messages.trymeAtPrefix} />
                </span>
                <input className={s.input}
                  id='username'
                  onChange={this.props.onChangeUsername}
                  placeholder='mxstbr'
                  type='text'
                  value={this.props.username} />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    )
  }
}

HomeView.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  loading: PropTypes.bool,
  onChangeUsername: PropTypes.func,
  onSubmitForm: PropTypes.func,
  repos: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool
  ]),
  username: PropTypes.string
}

export function mapDispatchToProps (dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(loadRepos('jmdesiderio'))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError()
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
