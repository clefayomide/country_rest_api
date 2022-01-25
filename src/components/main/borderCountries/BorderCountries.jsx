import React, { useContext } from 'react'
import { Context } from '../../../App'
import { v4 as uuidv4} from 'uuid'
import { Link } from 'react-router-dom'

const BorderCountries = ({ borders }) => {
    const { countryData } = useContext(Context)

    const getBorderCountryFullname = (altSpelling) => {
        const isMatchAlt = countryData.find((country) => country.cca3 === altSpelling);
        return isMatchAlt.name.common
    }

    return (
        <>
            <div className='flex flex-wrap ml-5'>
                {borders && borders.map((border) => <Link to={`/information/${getBorderCountryFullname(border)}`} key={uuidv4()}><button className='rounded-sm shadow-md border-2 border-neutral-300 w-fit pl-3 pr-3 mb-2 mr-2 dark:bg-darkModeElements dark:border-slate-600 dark:text-slate-200'>{getBorderCountryFullname(border)}</button></Link>)}
            </div>
        </>
    )
}

export default BorderCountries
