'use strict'
import React, { Component } from 'react'
import Title from './title'

export default class App extends Component {
  render () {
    return (
      <div>
        <Title name='Wandreus' lastName='Pereria' />
        <Title />
      </div>
    )
  }
}
