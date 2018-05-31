// define states
export const ColorFilter = {
  RED: 'red',
  BLUE: 'blue'
}

export const SizeFilter = {
  BIG: '35px',
  SMALL: '15px'
}

// define functions
export const setColorFilter = color => ({
  type: 'SET_COLOR_FILTER', color
})

export const setSizeFilter = size => ({
  type: 'SET_SIZE_FILTER', size
})







