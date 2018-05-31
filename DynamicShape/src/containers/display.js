import React from 'react'
import PropTypes from 'prop-types'

const display = ({color, size}) => (
  <div>
    <div style={{ backgroundColor: {color}, width: {size}, height: {size} }} >
    </div>
  </div>
)

display.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

export default display

