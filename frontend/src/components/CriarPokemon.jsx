import React, {useState} from 'react'
import Criar from './forms/Criar'
import { Button } from '@mui/material';

const CriarPokemon = ({listOptions, onCreation}) => {
  const [visivel, setVisivel] = useState(true);


  return (
    <div className='formCriacao'>
      {/* <Button variant="contained" className={visivel?'caixa-criacao': 'caixa-criacao invisivel'}>Criar Pokemons !
      </Button> */}
        <Criar op={listOptions} cr={onCreation}></Criar>
    </div>
  )
}

export default CriarPokemon