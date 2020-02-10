'use strict'

import React from 'react'

const Button = ({ callBack, children }) => <button className='buttom' onClick={callBack}>{children}</button>

Button.defaultProps = {
  children: '#000'
}

export default Button
