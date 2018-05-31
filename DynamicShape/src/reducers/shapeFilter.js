import {ColorFilter, SizeFilter} from '../actions'

export const colorFilter = (state=ColorFilter.RED, action) => {
  switch(action.type) {
    case 'SET_COLOR_FILTER':
      return action.color
    default:
      return state
  }
}

export const sizeFilter = (state = SizeFilter.BIG, action) => {
  switch (action.type) {
    case 'SET_SIZE_FILTER':
      return action.size
    default:
      return state
  }
}







