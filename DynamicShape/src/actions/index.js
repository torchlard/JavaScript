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
  type: 'REMOVE_SHAPE_LIST'
})

export const toggleShapeText = id => ({
  type: 'TOGGLE_SHAPE_TEXT', id
})

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SEARCH_SUBREDDIT = 'SEARCH_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

export const searchSubreddit = subreddit => ({
  type: SEARCH_SUBREDDIT, subreddit
})

export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT, subreddit
})

export const requestPosts = subreddit => ({
  type: REQUEST_POSTS, subreddit
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS, subreddit,
  posts: json.data.children.map(i => i.data),
  receiveAt: Date.now()
})

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`http://www.reddit.com/r/${subreddit}/json`)
    .then(res => res.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if(!posts){
    return true
  }
  if (posts.isFetching){
    return false
  }
  return posts.didInvalidate
}

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if(shouldFetchPosts(getState(), subreddit)){
    return dispatch(fetchPosts(subreddit))
  }
}






