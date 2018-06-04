
const addOrRemove = (array, value) => {
  let index = array.indexOf(value)
  if(index === -1){
    array.push(value)
  } else {
    array.splice(index,1)
  }
  return array
}


export const shapeList = (state=[], action) => {
  switch(action.type){
    case 'ADD_SHAPE_LIST':
      return [...state, {id: action.id, glow: true}]
    case 'REMOVE_SHAPE_LIST':
      if(state.length>0){
        return state.slice(0, state.length-1)
      }
      // if(state.length>0){
      //   return state.map(i => 
      //     ((action.listing).indexOf(i.id) > -1) ? null: i)
      // }
      return state
    case 'TOGGLE_SHAPE_TEXT':
      // console.log('toggle')
      return state.map(i => 
        (i.id===action.id) ? {...i, glow: !i.glow} : i )
    default:
      return state
  }
}

export const glowList = (state=[], action) => {
  switch(action.type){
    case 'TOGGLE_SHAPE_TEXT':
      let res = addOrRemove(state, action.id)
      console.log(res)
      return res
    default:
      return state
  }
}




