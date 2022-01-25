import React, { useContext } from 'react'
import { Context } from '../../../../App'

const SearchResult = ({ data }) => {
    const { searchValue, setSearchValue, url, setCountryData, setIsLoading } = useContext(Context)

    // country search function
    const searchCountry = (parameter) => {
      setIsLoading(true)
      try{
        fetch(`${url}name/${parameter.target.innerHTML}?fullText=true`).then((res) => res.json()).then((data) => {
          setCountryData(data)
          setSearchValue("")
          setIsLoading(false)
        })
      }catch(error) {
        console.log(error)
      }
    }

    return (
        <>
          {data.split(" ").join("").toLowerCase().includes(searchValue.split(" ").join("").toLowerCase()) ? <div className='p-2 pl-5 hover:bg-slate-300 dark:hover:bg-darkModeBackground dark:text-darkModeTextAndDarkModeElements cursor-pointer' onClick={searchCountry}>{data === "Congo" ? "Republic of the Congo" : data === "Congo, The Democratic Republic of the" ? "Democratic Republic of the Congo" : data === "Cote D'Ivoire" ? "Ivory Coast": data === "Libyan Arab Jamahiriya" ? "Libya" : data}</div> : ""}
        </>
    )
}

export default SearchResult
