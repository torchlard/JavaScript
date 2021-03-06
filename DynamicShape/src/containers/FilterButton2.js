import Controls from '../components/Controls'
import {setSizeFilter} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state, prop) => ({
  showing: prop.size === state.sizeFilter || state.shapeList.length === 0
})

const mapDispatchToProps = (dispatch, prop) => ({
  onClick: () => dispatch(setSizeFilter(prop.size))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)





