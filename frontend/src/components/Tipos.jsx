import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import AxiosInstance from './Axios'

const Tipos = () => {

  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)

  const GetData = () => {
    AxiosInstance.get("tipos/")
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
      {loading? <p>loading data...</p>:
       <ItemList pokemons={myData} isPokemon={false}/>
      }
    </>
  )
}

export default Tipos