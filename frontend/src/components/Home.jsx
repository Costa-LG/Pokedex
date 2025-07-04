import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import '../App.css'
import SearchField from './SearchField'
import AxiosInstance from './Axios'

const Home = () => {
  const [pokemonData, setPokemon] = useState()
  const [loading, setLoading] = useState(true)

  // pegando os dados da API
  const GetData = async (searchTerm='') => {
    // criando o url e limpando o input da busca
    const query = searchTerm.trim().toLowerCase();
    const url = query ? `pokemons/?nome=${query}` : "pokemons";
    const response = await AxiosInstance.get(url)
    .then((res) => {
        setPokemon(res.data)
        setLoading(false) 
      })
  }

  // Use effect ira carregar os dados
  useEffect(() => {
    // search term vazio por padrao, ira carregar todos os pokemons
    GetData();
  }, []);

  const handleSearchTermChange = (searchTerm) => {
    // chamando a api com um novo termo de busca
    GetData(searchTerm)
  }

  if (loading) {
    return <div>Carregando Pokemons ...</div>
  }

  return (
    <>
        <SearchField onSearchTermChange={handleSearchTermChange}/>
        <ItemList pokemons={pokemonData} isPokemon={true}/>
    </>
  )
}

export default Home