import React from 'react'
import HeaderText from './text/HeaderText'
import DarkMode from './darkMode/DarkMode'

const Header = () => {
    return (
        <div className='flex justify-between'>
            <HeaderText/>
            <DarkMode/>
        </div>
    )
}

export default Header
