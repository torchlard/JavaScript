import {
  REQUEST_POSTS, RECEIVE_POSTS, SEARCH_SUBREDDIT, INVALIDATE_SUBREDDIT
} from '../actions'


export const searchedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case SEARCH_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

const posts = (state={isFetching: false, didInvalidate:false, items:[]}, action) => {
  switch(action.type){
    case INVALIDATE_SUBREDDIT:
      return {...state, didInvalidate: true}
    case REQUEST_POSTS:
      return {...state, isFetching:true, didInvalidate: false}
    case RECEIVE_POSTS:
      return {...state, isFetching:false, didInvalidate:false, items: action.posts, lastUpdated: action.receiveAt}
    default:
      return state
  }
}

export const postsBySubreddit = (state={}, action) => {
  switch(action.type){
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state, [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
}





