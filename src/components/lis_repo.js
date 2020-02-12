import React from 'react'

const LisRepo = ({ className, title, list }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {list.map(({ name, link }, index) => (
        <li key={index}><a href={link}>{name}</a></li>
      ))}
    </ul>
  </div>
)

LisRepo.defaultProps = {
  title: 'Titulo'
}

LisRepo.propTypes = {
  className: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  list: React.PropTypes.array
}

export default LisRepo
