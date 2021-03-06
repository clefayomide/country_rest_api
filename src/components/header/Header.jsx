import React from 'react'
import HeaderText from './text/HeaderText'
import DarkMode from './darkMode/DarkMode'

const Header = () => {
    return (
        <div className='text-sm md:text-2xl flex justify-between bg-white dark:bg-darkModeElements p-8 shadow-md'>
            <HeaderText/>
            <DarkMode/>
        </div>
    )
}

export default Header
