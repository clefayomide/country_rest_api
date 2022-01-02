import React from 'react'

const Card = ({ data }) => {
    const {name, capital, flags, population, region} = data
    const {svg} = flags
    const {common} = name
    
    return (
        <div className='w-3/10'>
            <div style={{ backgroundImage: `url("${svg}")`}} className='bg-center bg-cover h-36 mt-14 shadow-xl rounded-t-lg'></div>
            <div className='bg-white shadow-xl rounded-b-lg pl-5 pt-7 pb-9'>
                <h3 className=' font-extrabold'>{common}</h3>
                <p className='font-semibold pt-4'>Population: <span className='font-light'>{population}</span></p>
                <p className='font-semibold'>Region: <span className='font-light'>{region}</span></p>
                <p className='font-semibold'>Capital: <span className='font-light'>{capital ? capital : common }</span></p>
            </div>
        </div>
    )
}

export default Card
