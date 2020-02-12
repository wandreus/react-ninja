'use strict'

import React from 'react'

const Button = ({ callBack, children }) => <button className='buttom' onClick={callBack}>{children}</button>

Button.defaultProps = {
  children: 'Button',
  callBack: () => console.log('sem função atribuida')
}

Button.propTypes = {
  callBack: React.PropTypes.func,
  children: React.PropTypes.any.isRequired
}

export default Button
