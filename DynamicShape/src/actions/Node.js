export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CREATE_NODE = 'CREATE_NODE'
export const DELETE_NODE = 'DELETE_NODE'
export const ADD_CHILD = 'ADD_CHILD'
export const DELETE_CHILD = 'DELETE_CHILD'

export const increment = nodeId => ({
  type: INCREMENT, nodeId
})

export const decrement = nodeId => ({
  type: DECREMENT, nodeId
})

let nextId = 0
export const createNode = () => ({
  type: CREATE_NODE, nodeId: `new_${nextId++}`
})

export const deleteNode = nodeId => ({
  type: DELETE_NODE, nodeId
})

export const addChild = (nodeId, childId) => ({
  type: ADD_CHILD, nodeId, childId
})

export const deleteChild = (nodeId, childId) => ({
  type: DELETE_CHILD, nodeId, childId
})

