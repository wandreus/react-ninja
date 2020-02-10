'use strict'
import React, { Component } from 'react'
import Button from './button'

export default class Square extends Component {
  constructor ({ color }) {
    super()
    this.state = {
      color
    }
  }

  static get defaultProps () {
    return {
      color: '#000'
    }
  }

  style (item = 'box') {
    const style = {
      box: {
        height: '100px',
        width: '100px',
        background: this.state.color,
        display: 'inline-block',
        transition: '.5s linear all'
      }
    }
    return style[item]
  }

  render () {
    return (
      <div style={this.style('box')}>
        {['red', 'green', 'blue', 'purple'].map((color, index) => (
          <Button callBack={(e) => this.setState({ color })} key={index}>{color}</Button>
        ))}
      </div>
    )
  }
}
