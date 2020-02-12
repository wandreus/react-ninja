'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        name: 'Wandreus Pereira',
        avatarUrl: 'https://avatars3.githubusercontent.com/u/33557525?v=4',
        followers: 1,
        following: 2,
        publicRepos: 5,
        login: 'wandreus'
      },
      repos: [],
      starred: []
    }
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}
