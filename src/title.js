'use strict'
import React from 'react'

const Title = (props) => <h1>{props.name}</h1>

Title.defaultProps = {
  name: 'Title section'
}

export default Title
