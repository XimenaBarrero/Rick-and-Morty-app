import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from "./utils/getRandomNumber"

function App() {
  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("")
  const [showError, setShowError] = useState(false)

  const getDataDimension = (idDimension) => {
    if(idDimension){
    const URL = `https://rickandmortyapi.com/api/location/${idDimension}` 
   axios.get(URL)
   .then(res => setLocation(res.data))
   .catch(err =>{
    setShowError(true)
    setTimeout(() => {
      setShowError(false)
    }, 2000)
    console.log(err)
   })
   }else{
    alert("Insert a value")
   }
  }

useEffect(() => {
  const  randomDimension = getRandomNumber()
  getDataDimension(randomDimension)
}, [])

const handleSubmit = event => {
  event.preventDefault()
  const dimensionSeach = event.target.searchValue.value
  getDataDimension(dimensionSeach)
}

const handleChangeInput = (event) => {
  setLocationName(event.target.value)
 
}

const getNewLocation = (URL, name) => {
 setLocationName(name)
  axios.get(URL)
  .then(res => setLocation(res.data))
  .catch(err => console.log(err))
}

  return (
    <div className="App">
        <section>
      <header className='header'>
      </header>
      </section>
        <div className='wrapper'>
          <form className='search-box' onSubmit={handleSubmit}>
        <input id="searchValue" value={locationName} type="text" onChange={handleChangeInput} placeholder=' search your dimension' />
        <button className='button' type="submit">Search</button>
        {
          showError ? <ErrorMessage /> : ""
        }
          </form>
        </div>
        <br></br><br></br>
        <h1 className='title'>Rick and Morty</h1>
        <h2 className='title'>dimension finder</h2><br></br>
      <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
      <LocationInfo location={location} /><br></br>
      <ResidentList location={location} /><br></br><br></br>
      <p className='footer'>Made with ♥ by Ximena</p><br></br>
    </div>
  )
}

export default App
