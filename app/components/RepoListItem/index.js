/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';
import styled from 'styled-components';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import NormalIssueIcon from 'components/IssueIcon';
import A from 'components/A';

export const IssueIcon = styled(NormalIssueIcon)`
  fill: #ccc;
  margin-right: 0.25em;
`;

export const IssueLink = styled(A)`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RepoLink = styled(A)`
  height: 100%;
  color: black;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: space-between;
`;

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    const item = this.props.item;
    let nameprefix = '';

    // If the repository is owned by a different person than we got the data for
    // it's a fork and we should show the name of the owner
    if (item.owner.login !== this.props.currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    // Put together the content of the repository
    const content = (
      <Wrapper>
        <RepoLink href={item.html_url} target="_blank">
          {nameprefix + item.name}
        </RepoLink>
        <IssueLink href={`${item.html_url}/issues`} target="_blank">
          <IssueIcon />
          <FormattedNumber value={item.open_issues_count} />
        </IssueLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: React.PropTypes.object,
  currentUser: React.PropTypes.string
};

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser()
}))(RepoListItem);