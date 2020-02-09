'use strict'
import React from 'react'

const Title = (props) => <h1>Olá, {`${props.name} ${props.lastName}`}</h1>

Title.defaultProps = {
  name: 'Desconhecido',
  lastName: 'Sem sobrenome'
}

export default Title
