import React from 'react'
import SingleItem from './SingleItem'



const ItemList = ({ pokemons, isPokemon, onDelete, onUpdate, listOptions = [] }) => {
  return (
    <div className='ItemListPokemon'>
      {pokemons.map((pokemon) => (
        <SingleItem 
          key={pokemon.codigo}
          codigo={pokemon.codigo}
          nome={pokemon.nome}
          tipo1={pokemon.tipo_primario_nome}
          tipo2={pokemon.tipo_secundario_nome}
          isPokemon={isPokemon}
          onDelete={onDelete}
          onUpdate={onUpdate} 
          listOptions={listOptions}
        />
      ))}
    </div>
  );
};
export default ItemList;