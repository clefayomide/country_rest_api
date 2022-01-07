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
          {data.split(" ").join("").toLowerCase().includes(searchValue.split(" ").join("").toLowerCase()) ? <div className='p-2 pl-5 hover:bg-slate-300 cursor-pointer' onClick={searchCountry}>{data === "CONGO" ? "REPUBLIC OF THE CONGO" : data === "CONGO, THE DEMOCRATIC REPUBLIC OF THE" ? "DEMOCRATIC REPUBLIC OF THE CONGO" : data === "COTE D'IVOIRE" ? "IVORY COAST": data === "LIBYAN ARAB JAMAHIRIYA" ? "LIBYA" : data}</div> : ""}
        </>
    )
}

export default SearchResult
