import React, { useState } from 'react';
import TextFields from './forms/TextField';
import SelectFields from './forms/SelectField';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SearchField = ({onSearchTermChange}) => {
  const { handleSubmit, reset, setValue, control, getValues } = useForm({
    defaultValues: {
      searchQuery: '',
      selecione: '',
    }
  });

  const HandleSearchBarSearch = (searchTerm) => {
    if (onSearchTermChange){
      onSearchTermChange(searchTerm);
    }
  }
    const HandleClearSearchBar = () => {
        if (onSearchTermChange) {
            onSearchTermChange(''); 
        }
    };



  const myOptions = [
    { value: 'abra', label: 'Abra' },
    { value: 'cadabra', label: 'Cadabra' },
    { value: 'charm', label: 'Charm' },
  ];


  return (
    <>
  
      <div className="TopSearch">
        <TextFields
          name="nome"
          control={control}
          label="Buscar Pokemon"
          placeholder="digite o nome do Pokemon"
          // 'onSearch' chama handleSearchBarSearch a cada digitação
          onSearch={(value) => HandleSearchBarSearch(value)}
          // onClear chama handleClearSearchBar
          onClear={HandleClearSearchBar}
          searchOnTyping={true}
        />

        <SelectFields
          label="Tipo"
          placeholder="Escolha o tipo do Pokemon"
          name="tipo_primario"
          options={myOptions}
          control={control}
        />
      </div>
    </>
  );
};

export default SearchField;
