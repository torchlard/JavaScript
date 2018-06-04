import React from 'react'
import PropTypes from 'prop-types'


const display = ({color, size}) => (
  <div style={{ 
    backgroundColor: color,
    width:size, height: size,
    margin: '5px' }} >
  </div>
)

display.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default display

