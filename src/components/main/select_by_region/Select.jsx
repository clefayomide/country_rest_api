import React, { useState, useContext, useEffect, useRef } from 'react'
import { Context } from '../../../App'

const Select = () => {
    const [region, setRegion] = useState("")
    const firstUpdate = useRef(true);
    const { url, setFilteredByRegion, setFilteredCountry } = useContext(Context)


    const handleRegion = (e) => {
        setRegion(e.target.value)
    }

    const getCountryUnderRegion = async () => {
        const res = await fetch(`${url}region/${region}`)
        const data = await res.json()
        setFilteredCountry([])
        setFilteredByRegion(data)
    }

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        getCountryUnderRegion()
    // eslint-disable-next-line
    },[region])

    return (
        <>
            <select className="p-4 rounded-lg shadow-xl cursor-pointer font-extrabold outline-none border-none dark:bg-darkModeElements dark:text-darkModeTextAndDarkModeElements" name="regions" id="regions" onChange={handleRegion} >
                <option value="" selected disabled hidden>Filter by Region</option>
                <option className="font-semibold" value="africa">Africa</option>
                <option className="font-semibold" value="america">America</option>
                <option className="font-semibold" value="asia">Asia</option>
                <option className="font-semibold" value="europe">Europe</option>
                <option className="font-semibold" value="oceania">Oceania</option>
            </select>
        </>
    );
};

export default Select;
