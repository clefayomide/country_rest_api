import { useState, useEffect, createContext } from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "./components/header/Header";
import Main from './components/main/Main'
import Loading from "./components/loader/Loading";
import data from "./country_name_list/name";
import CountryDetail from './components/main/country_detail/CountryDetail'
import Error from "./components/main/error_page/Error";

export const Context = createContext()
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const url = 'https://restcountries.com/v3.1/'
  const [searchValue, setSearchValue] = useState("")

  // country data
  const [countryData, setCountryData] = useState([])
  const [filteredCountry, setFilteredCountry] = useState([])
  const [filteredByRegion, setFilteredByRegion] = useState([])
  const [countryName] = useState(data)

  // fetch country data
  const getCountryData = () => {
      fetch(`${url}all`).then((res) => {
          if(res.status >= 200 && res.status <= 299){
              return res.json()
          }else{
              console.log('an error occurred')
          }
      }).then((data) => {
        setCountryData(data)
        setIsLoading(false)
      })
  }

  useEffect(() => {
      getCountryData()
  }, [])

  if(isLoading){
    return <Loading/>
  }
  return (
    <Context.Provider value={{ setIsLoading, countryData, url, setCountryData, searchValue, setSearchValue, countryName, filteredCountry, setFilteredCountry, filteredByRegion, setFilteredByRegion }}>
      <div className="bg-lightModeBackground dark:bg-darkModeBackground h-screen font-Nunito">
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<Main/>}/>
            <Route path="information/:common" element={<CountryDetail/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
        </main>
      </div>
    </Context.Provider>
  );
}

export default App;