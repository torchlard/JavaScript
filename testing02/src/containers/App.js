import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import {increment, decrement, createNode, deleteNode, addChild, deleteChild} from '../actions'


class Node extends Component {

  // handleIncrement = () => {
  //   const { increment, id } = this.props
  //   increment(id)
  // }
  // handleDecrement() {
  //   const { decrement, id } = this.props
  //   decrement(id)
  // }
  // handleAddChild(e) {
  //   e.preventDefault()
  //   const { addChild, createNode, id } = this.props
  //   const childId = createNode().nodeId
  //   addChild(id, childId)
  // }

  // handleRemove(e) {
  //   e.preventDefault()
  //   const { deleteChild, deleteNode, parentId, id } = this.props
  //   deleteChild(parentId, id)
  //   deleteNode(id)
  // }

  renderChild = (childId) => {
    const { id } = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id} />
      </li>
    )
  }

  render() {
    const { counter, id, inc, dec,addC, delC, childIds } = this.props
    return (
      <div>
        hello world {counter}
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={delC}>X</button>
        <button onClick={addC}>Add Child</button>
        <ul>
          {childIds.map(this.renderChild)}
        </ul>
      </div>
    )
  }

}


const mapStateToProps = (state, prop) => state.tree[prop.id]

const mapDispatchToProps = (dispatch, prop) => ({
  inc: () => dispatch(increment(prop.id)),
  dec: () => dispatch(decrement(prop.id)),
  cNode: () => dispatch(createNode()),
  dNode: () => dispatch(deleteNode(prop.id)),
  addC: () => {
    const childId = dispatch(createNode()).nodeId
    dispatch(addChild(prop.id, childId))
  } ,
  delC: () => {
    dispatch(deleteChild(prop.parentId, prop.id))
    dispatch(deleteNode(prop.id))
  }
})

const ConnectedNode = connect(mapStateToProps, mapDispatchToProps)(Node)

export default ConnectedNode












