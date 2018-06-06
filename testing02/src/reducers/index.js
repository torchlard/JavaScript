import { INCREMENT, DECREMENT, CREATE_NODE, DELETE_NODE, 
  ADD_CHILD, DELETE_CHILD } from '../actions'

const node = (state, action) => {
  switch(action.type){
    case CREATE_NODE:
      return {
        ...state,
        tree: {[action.nodeId]: {id: action.nodeId, counter:0, childIds:[]}}
      }
    case INCREMENT:
      console.log('inc')
      return {
        ...state, tree:
        {[action.nodeId]: {...state, counter: state.counter++}}
      }
    case DECREMENT:
      return {
        ...state, [action.nodeId]: {...state, counter: state.counter--}
      }
    case ADD_CHILD:
      return {...state, 
        [action.nodeId]: {...state, childIds: [...state, action.childId]}
        }
    case DELETE_CHILD:
      return {...state, childIds: state.filter(id => id !== action.childId )}
    default:
      return state
  }
}

// recursively get all child under certain node
const getDescendants = (state, nodeId) => {
  state[nodeId].childIds.reduce((acc, childId) => (
    [...acc, childId, ...getDescendants(state, childId)]
  ), [])
}

const deleteMany = (state, ids) => {
  state = {...state}
  ids.forEach(id => delete state[id])
  return state
}

export default (state={}, action) => {
  const {nodeId} = action
  if(typeof nodeId === undefined){
    return state
  }
  if(action.type === DELETE_NODE){
    const descendant = getDescendants(state, nodeId)
    return deleteMany(state, [nodeId, ...descendant])
  }

  return {...state, tree: {[nodeId]: node(state[nodeId], action)}}
  
}

