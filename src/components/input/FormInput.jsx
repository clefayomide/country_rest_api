import React from 'react'

const FormInput = ({ type, placeholder, className }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} className={className}/>
        </>
    )
}

export default FormInput
