import {combineReducers} from 'redux'
import {colorFilter, sizeFilter} from './shapeFilter'
import {shapeList, glowList} from './shapeList'
import {selectedSubreddit, postsFromSubreddit} from './reddit.js'

export default combineReducers({
  colorFilter, sizeFilter, shapeList, glowList
})









