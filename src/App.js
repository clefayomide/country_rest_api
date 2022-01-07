import { useState, useEffect, createContext } from "react";
import Header from "./components/header/Header";
import Main from './components/main/Main'
import Loading from "./components/loader/Loading";

export const Context = createContext()
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const url = 'https://restcountries.com/v3.1/'
  const [searchValue, setSearchValue] = useState("")

  // country data
  const [countryData, setCountryData] = useState([])
  const [countryName, setCountryName] = useState([])

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

  // fetch country name list
  const getCountryName = () => {
    fetch('http://vocab.nic.in/rest.php/country/json').then((res) => {
      if(res.status >= 200 && res.status <= 299){
        return res.json()
      }else{
        console.log('an error occurred')
      }
    }).then((data) => {
      setCountryName(data.countries)
    })
  }

  useEffect(() => {
      getCountryData()
      getCountryName()
  }, [])

  if(isLoading){
    return <Loading/>
  }

  return (
    <Context.Provider value={{ setIsLoading, countryData, url, setCountryData, searchValue, setSearchValue, countryName }}>
      <div className="bg-lightModeBackground font-Nunito">
        <Header/>
        <Main/>
      </div>
    </Context.Provider>
  );
}

export default App;