import React from 'react'
import data from "../../database/dados_iniciais.json"
import ItemList from './ItemList'
import '../App.css'

const Home = () => {
  return (
    <>
        <ItemList pokemons={data} />
    </>
  )
}

export default Home