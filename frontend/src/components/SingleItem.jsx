import React from 'react'


const SingleItem = ({codigo, nome, tipo1, tipo2, isPokemon}) => {
  return (
    <>
        <div className='Pokemon__item'>
            <div className='Cabecalho'>
                <h2> {nome}</h2><p className='Pokemon__item--codigo'>#{codigo}</p>
            </div>
            {isPokemon?(<p> Tipo: {tipo1} {tipo2 && ` / ${tipo2}`}</p>):(<></>)}
        </div>
    </>
  )
}

export default SingleItem