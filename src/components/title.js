'use strict'
import React from 'react'

const Title = ({ name }) => <h1>{name}</h1>

Title.defaultProps = {
  name: 'Title section'
}

export default Title
