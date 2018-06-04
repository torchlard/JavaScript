import React from 'react'
import {connect} from 'react-redux'
import {searchSubreddit} from '../actions'

const SearchReddit = ({dispatch}) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if(!input.value.trim()) return;
        dispatch(searchSubreddit(input.value))
        input.value = ''
      }}>
      <input ref={node => input = node} />
      <button type="submit">
        Search
      </button>
      </form>
    </div>
  )
}

export default connect()(SearchReddit)
// export default SearchReddit

