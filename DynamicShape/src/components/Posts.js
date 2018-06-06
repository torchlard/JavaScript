import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/Node'

class Node extends Component {
  
  handleIncrement = () => {
    const {increment, id} = this.props
    increment(id)
  }
  handleDecrement(){
    const {decrement, id} = this.props
    decrement(id)
  }
  handleAddChild(e){
    e.preventDefault()
    const {addChild, createNode, id} = this.props
    const childId = createNode().nodeId
    addChild(id, childId)
  }

  handleRemove(e){
    e.preventDefault()
    const {deleteChild, deleteNode, parentId, id} = this.props
    deleteChild(parentId, id)
    deleteNode(id)
  }

  // componentDidMount(){
  //   const {dispatch} = this.props
  //   dispatch(createNode())
  // }

  renderChild(childId){
    const {id} = this.props
    return (
      <li key={childId}>
        <ConnectedNode id={childId} parentId={id}/>
      </li>
    )
  }

  render(){
    const {counter, childIds, post} = this.props
    return (
      <div>
        {post.title} [ {counter}{' '}]
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleRemove}>X</button>
        <button onClick={this.handleAddChild}>Add Child</button>
        <ul>
          {childIds.map(this.renderChild)}
        </ul>
      </div>
    )
  }

}

// const Posts = ({posts}) => (
//   <ul>
//     {posts.map((post, i) => 
//       <li key={i}>{post.title}</li>
//     )}
//   </ul>
// )

const mapStateToProps = (state,prop) => ({

})

const ConnectedNode = connect(mapStateToProps, actions)(Node)

export default ConnectedNode

