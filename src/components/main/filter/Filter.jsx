import React from 'react'
import FilterBtn from './filterButton/FilterBtn'

const Filter = ({ filterIsOpen, setFilterIsOpen }) => {
    return (
        <>
            <FilterBtn filterIsOpen={filterIsOpen} setFilterIsOpen={setFilterIsOpen}/>
        </>
    )
}

export default Filter
