import React from 'react'
import Controls from './Controls'
import {setColorFilter} from '../actions'
import {connect} from 'react-redux'

const mapStateToProps = (state, prop) => ({
  showing: prop.color === state.colorFilter
})

const mapDispatchToProps = (dispatch, prop) => ({
  onClick: () => dispatch(setColorFilter(prop.color))
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls)





