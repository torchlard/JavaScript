import React from 'react'
import PropTypes from 'prop-types'
import Display from './Display'

const displayList = ({color, size, shapeList}) => {
  let leftover = {color, size}
  return (
    <div>{
      shapeList.map( i =>
        <Display
          key={i.id}
          {...leftover}
        />
      )
    }
    </div>
  )
} 

displayList.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  shapeList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired
}


export default displayList

