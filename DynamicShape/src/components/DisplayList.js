import React from 'react'
import PropTypes from 'prop-types'
// import Display from './Display'

const divStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  userSelect: 'none'
}
// const textStyle = {
//   fontSize: '50px'
// }


const displayList = ({color, size, shapeList, onclick}) => {
  // let leftover = {color, size}
  return (
    <div style={divStyle}>{
      shapeList.map( i =>
        // <Display
        //   key={i.id}
        //   onClick={onclick}
        //   {...leftover}
        // >1</Display>
        <div 
        key={i.id}
        onClick={() => onclick(i.id)}
        style={{ 
          backgroundColor: color,
          width:size, height: size,
          margin: '5px' }} >
          <span style={{ 
          fontSize: '50px',
          MozUserSelect: 'none',
          color: i.glow ? '#999' : '#fff'
          }}>{i.id}</span>
        </div>
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
  }).isRequired).isRequired,
  onclick: PropTypes.func.isRequired,
}


export default displayList

