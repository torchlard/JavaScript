import {combineReducers} from 'redux'
import {colorFilter, sizeFilter} from './shapeFilter'
import {shapeList, glowList} from './shapeList'
import {searchedSubreddit, postsBySubreddit} from './reddit.js'
import node from './Node'

export default combineReducers({
  colorFilter, sizeFilter, shapeList, glowList,
  searchedSubreddit, postsBySubreddit, node
})









