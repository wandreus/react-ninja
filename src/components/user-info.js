import React from 'react'

const UserInfo = ({ userinfo: { name, avatarUrl, followers, following, publicRepos, login } }) => (
  <div className='app_user'>
    <img width='250' src={avatarUrl} />
    <h1>
      <a href={`https://github.com/${login}`}>{name}</a>
    </h1>

    <ul className='app_repos'>
      <li>Repositorios: {publicRepos}</li>
      <li>Seguidores: {followers}</li>
      <li>Seguindo: {following}</li>
    </ul>
  </div>
)

export default UserInfo
