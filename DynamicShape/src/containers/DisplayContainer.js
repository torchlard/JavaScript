import {connect} from 'react-redux'
import DisplayList from '../components/DisplayList'
import {ColorFilter, SizeFilter} from '../actions'

const getColor = (color) => {
  switch(color){
    case ColorFilter.RED:
      return 'red'
    case ColorFilter.BLUE:
      return 'blue'
    default:
      throw new Error('unknown color')
  }
}

const getSize = (size) => {
  switch (size) {
    case SizeFilter.BIG:
      return '65px'
    case SizeFilter.SMALL:
      return '35px'
    default:
      throw new Error('unknown size')
  }
}

const mapStateToProps = state => ({
  color: getColor(state.colorFilter),
  size: getSize(state.sizeFilter),
  shapeList: state.shapeList
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(DisplayList)





