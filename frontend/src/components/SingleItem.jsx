import React from 'react'


const SingleItem = ({codigo, nome, tipo1, tipo2}) => {
  return (
    <>
        <div className='Pokemon__item'>
            <h2> {nome} (#{codigo})</h2>
            <p> Tipo: {tipo1} {tipo2 && ` / ${tipo2}`}</p>
        </div>
    </>
  )
}

export default SingleItem