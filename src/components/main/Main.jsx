import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid'
import SearchIcon from './search/searchIcon/SearchIcon'
import SearchInput from './search/searchInput/SearchInput'
import Card from './cards/Card'
import { Context } from '../../App'
import SearchResult from './search/searchResults/SearchResult'
import Select from './select_by_region/Select'

const Main = () => {
    const { countryData, searchValue, countryName, filteredCountry, filteredByRegion } = useContext(Context)

    return (
        <div className='p-10'>
            <div className='flex justify-between flex-col items-baseline md:flex-row md:items-center'>
                {/* search */}
                <div className='flex bg-white dark:bg-darkModeElements pt-4 pb-4 pl-5 w-full md:w-96 shadow-lg rounded-md'>
                    <SearchIcon />
                    <SearchInput />
                </div>

                {/* filter by region */}
                <div className='mt-10 md:mt-0'>
                    <Select />
                </div>
            </div>

            {searchValue && <div className='w-96 bg-white dark:bg-darkModeElements shadow-xl mt-1.5 rounded-sm max-h-28 overflow-scroll'>
                {countryName.map((country) => <SearchResult key={uuidv4()} data={country.name} />)}
            </div>}

            {/* flags and details */}
            <div className='flex justify-between flex-wrap'>
                {filteredCountry.length > 0 ? filteredCountry.map((country) => <Card key={uuidv4()} data={country} />) : filteredByRegion.length > 0 ? filteredByRegion.map((country) => <Card data={country} key={uuidv4()}/>) : countryData.map((country) => <Card key={uuidv4()} data={country} />)}
            </div>
        </div>
    )
}

export default Main
