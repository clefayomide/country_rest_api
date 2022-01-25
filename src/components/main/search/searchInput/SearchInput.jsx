import React, { useState } from 'react'
import FormInput from '../../../input/FormInput'

const SearchInput = () => {
    const [inputValue, setInputValue] = useState("")
    
    return (
        <>
            <FormInput type="text" placeholder="Search for a country..." className="ml-6 w-full border-none outline-none dark:bg-darkModeElements dark:text-darkModeTextAndDarkModeElements" value={inputValue} valueOnChange={setInputValue}/>
        </>
    )
}

export default SearchInput
