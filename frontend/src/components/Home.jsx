import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import '../App.css'
import SearchField from './SearchField'
import AxiosInstance from './Axios'

const Home = () => {
  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () => {
    AxiosInstance.get("pokemons/")
      .then((res) => {
        setMyData(res.data)
        setLoading(false) 
      })
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
        <SearchField/>
        {loading? <p>loading data...</p>:
          <ItemList pokemons={myData} isPokemon={true}/>
        }
    </>
  )
}

export default Home