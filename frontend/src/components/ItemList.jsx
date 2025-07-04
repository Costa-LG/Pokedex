import React from 'react'
import SingleItem from './SingleItem'



const ItemList = ({ pokemons, isPokemon, onDelete, listOptions = [] }) => {
  return (
    <div className='ItemListPokemon'>
      {pokemons.map((pokemon) => (
        <SingleItem 
          key={pokemon.codigo}
          codigo={pokemon.codigo}
          nome={pokemon.nome}
          tipo1={pokemon.tipo_primario}
          tipo2={pokemon.tipo_secundario}
          isPokemon={isPokemon}
          onDelete={onDelete}
          listOptions={listOptions}
        />
      ))}
    </div>
  );
};
export default ItemList;