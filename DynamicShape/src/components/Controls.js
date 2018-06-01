import React from 'react'
import PropTypes from 'prop-types'

const control = ({showing, children, onClick}) => (
  <button
    onClick = {onClick}
    disabled = {showing}
    style = {{ marginLeft: '4px' }}> 
    {children}
  </button>
)

control.propTypes = {
  showing: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default control

