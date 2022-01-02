import React, { useState, useEffect } from 'react'
import SearchIcon from './search/searchIcon/SearchIcon'
import SearchInput from './search/searchInput/SearchInput'
import Filter from './filter/Filter'
import FilterDropdown from './filter/filterDropDown/FilterDropdown'
import Card from './cards/Card'

const Main = () => {
    // filter state
    const [filterIsOpen, setFilterIsOpen] = useState(false)
    // country data
    const [countryData, setCountryData] = useState([])

    // fetch country data
    const getCountryData = () => {
        fetch('https://restcountries.com/v3.1/all').then((res) => {
            if(res.status >= 200 && res.status <= 299){
                return res.json()
            }else{
                console.log('an error occurred')
            }
        }).then((data) => {
            setCountryData(data)
        })
    }

    useEffect(() => {
        getCountryData()
    }, [])

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
