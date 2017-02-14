import React, { PropTypes } from 'react'

import List from '../List'
import ListItem from '../ListItem'
import LoadingIndicator from '../LoadingIndicator'
import RepoListItem from '../RepoListItem'

const ReposList = ({ loading, error, repos }) => {
  if (loading) {
    return <List component={LoadingIndicator} />
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    )
    return <List component={ErrorComponent} />
  }

  if (repos !== false) {
    return <List items={repos} component={RepoListItem} />
  }

  return null
}

ReposList.propTypes = {
  error: PropTypes.any,
  loading: PropTypes.bool,
  repos: PropTypes.any
}

export default ReposList
