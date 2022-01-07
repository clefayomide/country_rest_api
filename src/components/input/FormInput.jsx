import React, { useContext } from 'react'
import { Context } from '../../App'

const FormInput = ({ type, placeholder, className, value, valueOnChange }) => {
    // url context
    const { searchValue, setSearchValue } = useContext(Context)

    // change input value and call search function
    const handleChange = (e) => {
        valueOnChange(e.target.value)
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

    return (
        <>
            <input type={type} placeholder={placeholder} className={className} value={value} onChange={handleChange}/>
        </>
    )
}

export default FormInput
