import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { Context } from '../../../App'
import BackButton from '../../buttons/backButton/BackButton'
import DetailCard from './DetailCard'

const CountryDetail = () => {
    const [details, setDetails] = useState([])
    const { common } = useParams()
    const { url } = useContext(Context)

    const getCountryDetails = async () => {
        const res = await fetch(`${url}name/${common}?fullText=true`)
        const data = await res.json()
        setDetails(data)
    }
    useEffect(() => {
        getCountryDetails()
        // eslint-disable-next-line
    }, [common])
    return (
        <div className='p-10'>
            <BackButton />
            {details.map((detail) => <DetailCard key={uuidv4()} data={detail}/>)}
        </div>
    )   
}

export default CountryDetail
