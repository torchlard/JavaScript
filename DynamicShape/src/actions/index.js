let nextId = 0

// define states
export const ColorFilter = {
  RED: 'red',
  BLUE: 'blue'
}

export const SizeFilter = {
  BIG: 'big',
  SMALL: 'small'
}

// define functions
export const setColorFilter = color => ({
  type: 'SET_COLOR_FILTER', color
})

export const setSizeFilter = size => ({
  type: 'SET_SIZE_FILTER', size
})

export const addShapeList = () => ({
  type: 'ADD_SHAPE_LIST', id: nextId++
})

export const removeShapeList = () => ({
  type: 'REMOVE_SHAPE_LIST', id: 1
})



