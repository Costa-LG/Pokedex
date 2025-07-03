import React from 'react'
import TextFields from './forms/TextField'
import SelectFields from './forms/SelectField'

const SearchField = () => {
  return (
    <>
        <div className='TopSearch'>
            <TextFields></TextFields>
            <SelectFields></SelectFields>
        </div>
    </>
  )
}

export default SearchField