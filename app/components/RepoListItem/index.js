import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentUser } from '../../containers/App/selectors';
import ListItem from '../ListItem';
import IssueIcon from '../IssueIcon';
import s from './styles.scss';

export class RepoListItem extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const item = this.props.item;
    let nameprefix = '';

    if (item.owner.login !== this.props.currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    const content = (
      <div className={s.root}>
        <a className={s.repoLink} href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </a>
        <a className={s.issueLink} href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon className={s.issueIcon} />
          <FormattedNumber value={item.open_issues_count} />
        </a>
      </div>
    );

    return (
      <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser()
}))(RepoListItem);
