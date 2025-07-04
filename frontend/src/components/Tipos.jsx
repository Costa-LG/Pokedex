import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import AxiosInstance from './Axios'
import CriarTipos from './CriarTipos'
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

  const handleDeleteFromList = (codigoDeletado) => {
    setMyData(prevData => prevData.filter(pokemon => pokemon.codigo !== codigoDeletado));
  };

  return (
    <>
      <CriarTipos onCreation={(novoTipo) => setMyData(prev => [...prev, novoTipo])}></CriarTipos>
      {loading? <p>loading data...</p>:
       <ItemList pokemons={myData} isPokemon={false} onDelete={handleDeleteFromList}/>
      }
    </>
  )
}

export default Tipos