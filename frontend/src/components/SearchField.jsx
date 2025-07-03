import React, { useState } from 'react'
import TextFields from './forms/TextField'
import SelectFields from './forms/SelectField'
import { useForm } from 'react-hook-form'


const SearchField = () => {

    const {handleSubmit, reset, setValue, control} = useForm();
    const myOptions = [
        { value: 'abra', label: 'Abra' },
        { value: 'cadabra', label: 'Cadabra' },
        { value: 'charm', label: 'Charm' }, 
    ]
    const submission = (data) => console.log(data)

  return (
    <>
    <form onSubmit={handleSubmit(submission)} id='Search'>

        <div className='TopSearch'>
            <TextFields
                name = "teste2"
                control = {control}
                label = "teste"
                placeholder = ''
                />
            <SelectFields
                label = "selecione o texto"
                placeholder = ''
                name = "selecione"
                options = {myOptions}
                control = {control}
                />
        </div>
    </form>
    </>
  )
}

export default SearchField