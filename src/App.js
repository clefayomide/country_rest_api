import { useState, useEffect, createContext } from "react";
import Header from "./components/header/Header";
import Main from './components/main/Main'
import Loading from "./components/loader/Loading";

export const Context = createContext()
function App() {
  const [isLoading, setIsLoading] = useState(true)

  // country data
  const [countryData, setCountryData] = useState([])

  // fetch country data
  const getCountryData = () => {
      fetch('https://restcountries.com/v3.1/all').then((res) => {
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
    <Context.Provider value={{ setIsLoading, countryData }}>
      <div className="bg-lightModeBackground font-Nunito">
        <Header/>
        <Main/>
      </div>
    </Context.Provider>
  );
}

export default App;