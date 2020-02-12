import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Input extends Component {
  constructor ({ defaultValue, defaultId }) {
    super()
    this.state = {
      value: defaultValue,
      id: defaultId,
      init: 0
    }
  }

  static get defaultProps () {
    return {
      defaultValue: 'Digite aqui'
    }
  }

  changeValue ({ target: { value } }) {
    this.setState({ value })
  }

  emptyPrimaryClick () {
    if (this.state.init > 0) {
      return false
    }

    this.setState({
      init: this.state.init + 1,
      value: ''
    })
  }

  render () {
    return (
      <input id={this.state.id} type='text' value={this.state.value} onChange={(e) => this.changeValue(e)} onFocus={() => this.emptyPrimaryClick()} />
    )
  }
}

Input.propTypes = {
  defaultValue: PropTypes.string.isRequired
}
