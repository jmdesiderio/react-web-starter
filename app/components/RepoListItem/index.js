import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { FormattedNumber } from 'react-intl'

import { makeSelectCurrentUser } from '../../containers/App/selectors'
import ListItem from '../ListItem'
import IssueIcon from '../IssueIcon'

import s from './styles.scss'

const RepoListItem = ({ item, currentUser }) => {
  let nameprefix = ''

  if (item.owner.login !== currentUser) {
    nameprefix = `${item.owner.login}/`
  }

  const content = (
    <div className={s.root}>
      <a className={s.repoLink} href={item.html_url} target='_blank'>
        {nameprefix + item.name}
      </a>
      <a className={s.issueLink} href={`${item.html_url}/issues`} target='_blank'>
        <IssueIcon className={s.issueIcon} />
        <FormattedNumber value={item.open_issues_count} />
      </a>
    </div>
  )

  return (
    <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
  )
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string
}

export default connect(createStructuredSelector({
  currentUser: makeSelectCurrentUser()
}))(RepoListItem)
