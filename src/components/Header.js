import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
  return (
    <h1>{title}</h1>
  )
}

// default title if none was given in App.js
Header.defaultProps = {
  title: 'Not To Do List',
}

// check right type of title
Header.propTypes = {
  title: PropTypes.string,
}

export default Header
