import Controls from '../components/Controls'
import {addShapeList, removeShapeList} from '../actions'
import {connect} from 'react-redux'

export const AddBtn = connect(
  (state,prop) => ({ showing: false }),
  (dispatch, prop) => ({
    onClick: ()=> dispatch(addShapeList(prop.id))
  })
)(Controls)


export const RemoveBtn = connect(
  (state, prop) => ({
    showing: state.shapeList.length === 0,
    // listing: state.glowList
  }),
  (dispatch, prop) => ({
    onClick: () => dispatch(removeShapeList())
  })
)(Controls)





