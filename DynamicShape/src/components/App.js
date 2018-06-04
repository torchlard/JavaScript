import React from 'react'
import Colors from './Colors'
import Size from './Size'
import Display from '../containers/DisplayContainer'
// import SearchReddit from '../containers/SearchReddit'
import Reddit from '../containers/SearchResult'

const App = () => (
  <div>
    <Colors/>
    <Size/>
    <Display/>
    {/* <SearchReddit/> */}
    <Reddit/>
  </div>
)

export default App


