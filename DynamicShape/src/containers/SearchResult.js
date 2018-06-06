import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchPostsIfNeeded, invalidateSubreddit} from '../actions'
import SearchReddit from './SearchReddit'
import Posts from '../components/Posts'


class SearchResult extends Component {
  static propTypes = {
    searchedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount(){
    console.log('did mount')
    const {dispatch, searchedSubreddit} = this.props
    dispatch(fetchPostsIfNeeded(searchedSubreddit))
  }

  componentWillReceiveProps(nextProps){
    console.log('will receive',nextProps)
    if(nextProps.searchedSubreddit !== this.props.searchedSubreddit){
      const {dispatch, searchedSubreddit} = nextProps
      dispatch(fetchPostsIfNeeded(searchedSubreddit))
    }
  }

  // handleChange = nextSubreddit => {
  //   this.props.dispatch(searchSubreddit(nextSubreddit))
  // }

  handleRefreshClick = e => {
    e.preventDefault()

    const {dispatch, searchedSubreddit} = this.props
    dispatch(invalidateSubreddit(searchedSubreddit))
    dispatch(fetchPostsIfNeeded(searchedSubreddit))
  }
  
  render(){
    const { posts, isFetching, lastUpdated} = this.props
    const isEmpty = posts.length === 0
    return (
      <div>
        <SearchReddit />
        <p>{lastUpdated && <span>
          Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}
        </span>}
        </p>
        <button onClick={this.handleRefreshClick}>Refresh</button>
        {isEmpty ? (isFetching ? <h2>Loading... pls wait</h2> : <h2>Empty</h2>)
        : <div style={{opacity: isFetching ? 0.5 : 1}}>
            {posts.map((post,i) => (
              <Posts post={post} id={i} counter={0} childIds={[]}/>
            ))}
          </div>
        }
      </div>
    )
  }
}


const mapStateToProps = state => {
  const {searchedSubreddit, postsBySubreddit} = state
  const {isFetching, lastUpdated, items: posts} = 
    postsBySubreddit[searchedSubreddit] || { isFetching: true, items: []}
  
  return {
    searchedSubreddit, posts, isFetching, lastUpdated
  }
    
}

export default connect(mapStateToProps)(SearchResult)









