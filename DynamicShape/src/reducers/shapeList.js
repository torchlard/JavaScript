
export const shapeList = (state=[], action) => {
  switch(action.type){
    case 'ADD_SHAPE_LIST':
      return [...state, {id: action.id}]
    case 'REMOVE_SHAPE_LIST':
      if(state.length>0){
        return state.slice(0, state.length-1)
      }
      return state
    default:
      return state
  }
}



