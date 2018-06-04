import Controls from '../components/Controls'
import {setColorFilter} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state, prop) => ({
  showing: prop.color === state.colorFilter || 
    state.shapeList.length === 0
})

const mapDispatchToProps = (dispatch, prop) => ({
  onClick: () => dispatch(setColorFilter(prop.color))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)





