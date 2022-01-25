import React, { useState, useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SearchIcon from './search/searchIcon/SearchIcon'
import SearchInput from './search/searchInput/SearchInput'
import Filter from './filter/Filter'
import FilterDropdown from './filter/filterDropDown/FilterDropdown'
import Card from './cards/Card'
import { Context } from '../../App'
import SearchResult from './search/searchResults/SearchResult'

const Main = () => {
    const { countryData, searchValue, countryName } = useContext(Context)

    // filter state
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    
    return (
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                {/* search */}
                <div className='flex bg-white dark:bg-darkModeElements pt-4 pb-4 pl-5 w-96 shadow-lg rounded-md'>
                    <SearchIcon/>
                    <SearchInput/>
                </div>

                {/* filter button */}
                <div>
                    <Filter filterIsOpen={filterIsOpen} setFilterIsOpen={setFilterIsOpen}/>
                </div>
            </div>

            {/* filter drop down */}
            <div className='relative'>
                {filterIsOpen && <FilterDropdown/>}
            </div>

            {searchValue && <div className='w-96 bg-white dark:bg-darkModeElements shadow-xl mt-1.5 rounded-sm max-h-28 overflow-scroll'>
                {countryName.map((country) => <SearchResult key={uuidv4()} data={country.name}/>)}
            </div>}

            {/* flags and details */}
            <div className='flex justify-between flex-wrap'>
                {countryData.map((country) => <Card key={uuidv4()} data={country}/>)}
            </div>
        </div>
    )
}

export default Main
