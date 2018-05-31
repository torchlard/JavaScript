import React from 'react'
import {ColorFilter} from '../actions'
import FilterButton1 from '../containers/FilterButton1'

const colors = () => {
  <div>
    <FilterButton1 color={ColorFilter.RED}> Red </FilterButton1>
    <FilterButton1 color={ColorFilter.BLUE}> BLUE </FilterButton1>
  </div>
}

export default colors



