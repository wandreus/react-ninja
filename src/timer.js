'use strict'
import React, { Component } from 'react'
import Button from './button'

export default class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0,
      showTimer: true
    }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ time: this.state.time + 1 })
    }, 1000)
  }

  render () {
    return (
      <div>
        {this.state.showTimer && <span>timer: {this.state.time}</span>}
        <Button callBack={() => this.setState({ showTimer: !this.state.showTimer })}>
          Hide and Show
        </Button>

        <Button callBack={() => this.setState({ time: 0 })}>
          Clear timer
        </Button>
      </div>
    )
  }
}
