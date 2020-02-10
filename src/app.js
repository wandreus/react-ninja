'use strict'
import React from 'react'
import Title from './title'
import Square from './square'
import Timer from './timer'

const App = () => (
  <div>
    <Title name='Component title' />
    {['#f00', '#ff0', '#f5f5f5', '#000'].map((color, index) => (
      <Square key={index} color={color} />
    ))}
    <Timer />
  </div>
)

export default App
