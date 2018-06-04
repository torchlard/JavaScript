import React from 'react'
import {ColorFilter, addShapeList, removeShapeList} from '../actions'
import FilterButton1 from '../containers/FilterButton1'
import {AddBtn, RemoveBtn} from '../containers/ShapeButton'

const colors = () => (
  <div>
    <FilterButton1 color={ColorFilter.RED}> Red </FilterButton1>
    <FilterButton1 color={ColorFilter.BLUE}> BLUE </FilterButton1>
    <AddBtn id={addShapeList.id}>Add Shape</AddBtn>
    <RemoveBtn id={removeShapeList.id}>Remove Shape</RemoveBtn>
  </div>
)

export default colors



