import React, { useState, useContext } from 'react'
import SearchIcon from './search/searchIcon/SearchIcon'
import SearchInput from './search/searchInput/SearchInput'
import Filter from './filter/Filter'
import FilterDropdown from './filter/filterDropDown/FilterDropdown'
import Card from './cards/Card'
import { Context } from '../../App'

const Main = () => {
    const { countryData } = useContext(Context)

    // filter state
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    
    return (
        <div className='p-10'>
            <div className='flex justify-between items-center'>
                {/* search */}
                <div className='flex bg-white pt-4 pb-4 pl-5 w-96 shadow-lg rounded-md'>
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

            {/* flags and details */}
            <div className='flex justify-between flex-wrap'>
                {countryData.map((country) => <Card key={country.name.common} data={country}/>)}
            </div>
        </div>
    )
}

export default Main
