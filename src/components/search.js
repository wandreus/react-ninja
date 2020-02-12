import React from 'react'

const getUser = async (e) => {
  const { target: value } = e
  const keyCode = e.which || e.keyCode
  const enter = 13

  if (keyCode !== enter) {
    return false
  }

  const conect = () => fetch(`https://api.github.com/users/${value}`)
  try {
    const get = await conect()
    const data = await get.json()
    console.log('😀', data)
  } catch (error) {
    console.log('error', error)
  }
}

const Search = () => (
  <div className='app_search'>
    <input type='text' placeholder='Digite o nome do usuario no github' onKeyUp={(e) => getUser(e)} />
  </div>
)

export default Search
