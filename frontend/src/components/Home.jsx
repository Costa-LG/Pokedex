import {React, useEffect, useState} from 'react'
import ItemList from './ItemList'
import '../App.css'
import SearchField from './SearchField'
import AxiosInstance from './Axios'
import CriarPokemon from './CriarPokemon'

const Home = () => {
  const [pokemonData, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

    // pegando os tipos unico para passar pro SelectField------------------//
  const [tiposData, setTipos] = useState([])
  const [loadingTipos, setLoadingTipos] = useState(true)
  const GetDataTipos = () => {
    AxiosInstance.get("tipos/")
      .then((res) => {
        setTipos(res.data) 
      })
  }
  //---------------------------------------------------------------------//


  // pegando os dados da API
  const GetData = async (filtros={}) => {
    // criando o url e limpando o input da busca
    const response = await AxiosInstance.get("pokemons/", {
      params: filtros,
  });
  setPokemon(response.data);
  setLoading(false);
};

  // Use effect ira carregar os dados
  useEffect(() => {
    // search term vazio por padrao, ira carregar todos os pokemons
    GetData();
    GetDataTipos();
  }, []);

  const handleFilterChange = (filtros) => {
    // chamando a api com um novo termo de busca
    GetData(filtros);
  }

  const handleDeleteFromList = (codigoDeletado) => {
    setPokemon(prevData =>
      prevData.filter(pokemon => String(pokemon.codigo) !== String(codigoDeletado))
    );
  };

  const handleOnCreation = (novoPokemon) => {
    setPokemon((prevList) => [...prevList, novoPokemon]);
  };

  const handleOnEdit = (pokemonEditado) => {
    setPokemon((prevList) => [...prevList, pokemonEditado]);
  };


  if (loading) {
    return <div>Carregando Pokemons ...</div>
  }

  return (
    <>
      <CriarPokemon listOptions={tiposData} onCreation={handleOnCreation}/>
      <SearchField onSearchTermChange={handleFilterChange} listOptions={tiposData}/>
      <ItemList
        pokemons={pokemonData}
        isPokemon={true}
        onDelete={handleDeleteFromList}
        onEdtion={handleOnEdit}
        listOptions={tiposData}
      />
    </>
  )
}

export default Home