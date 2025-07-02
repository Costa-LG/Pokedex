import React from 'react'
import SingleItem from './SingleItem'
import data from "../../database/dados_iniciais.json"

const ItemList = ({ pokemons }) => {
  return (
    <div className='ItemListPokemon'>
      {
        pokemons.map((pokemon) => (
          <SingleItem key={pokemon.codigo} codigo={pokemon.codigo} nome={pokemon.nome} tipo1={pokemon.tipo_primario} tipo2={pokemon.tipo_secundario}
          />
        ))
      }
    </div>
  );
};

export default ItemList;