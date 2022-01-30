import React from 'react'
import { Link } from 'react-router-dom'

const HeaderText = () => {
    return (
        <>
            <Link to="/">
                <h1 className='font-extrabold text-black dark:text-white'>Where in the world?</h1>
            </Link>
        </>
    )
}

export default HeaderText
