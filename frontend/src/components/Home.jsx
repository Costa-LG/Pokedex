import React from 'react'
import data from "../../database/dados_iniciais.json"
import ItemList from './ItemList'
import '../App.css'
import SearchField from './SearchField'


const Home = () => {
  return (
    <>
        <SearchField/>
        <ItemList pokemons={data} />
    </>
  )
}

export default Home