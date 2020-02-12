'use strict'
import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import UserAction from './user-actions'
import LisRepo from './lis_repo'

const AppContent = ({ userInfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userInfo && <UserInfo userinfo={userInfo} />}
    {!!userInfo && <UserAction />}
    {!!repos.length &&
      <LisRepo
        className='app_listRepos'
        title='Repositórios:'
        list={repos}
      />}

    {!!starred.length &&
      <LisRepo
        className='app_listStarred'
        title='Favoritos:'
        list={starred}
      />}
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
