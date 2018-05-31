import React from 'react'
import {SizeFilter} from '../actions'
import FilterButton2 from '../containers/FilterButton2'

const Size = () => {
  <div>
    <FilterButton2 size={SizeFilter.BIG}> BIG </FilterButton2>
    <FilterButton2 size={SizeFilter.SMALL}> SMALL </FilterButton2>
  </div>
}

export default Size



