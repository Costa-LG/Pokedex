import React, {  useState } from 'react';
import TextFields from './forms/TextField';
import SelectFields from './forms/SelectField';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const SearchField = ({onSearchTermChange, listOptions}) => {
  const { handleSubmit, reset, setValue, control, getValues } = useForm({
    defaultValues: {
      searchQuery: '',
      selecione: '',
    }
  });


  const handleSearchBarSearch = () => {
    const filtros = getValues(); // pega nome e tipo_primario
    if (onSearchTermChange) {
      onSearchTermChange(filtros); // envia objeto completo
    }
  };
    const handleClearSearchBar = () => {
      reset(); // limpa os campos do form
      if (onSearchTermChange) {
        onSearchTermChange({ nome: '', tipo_primario: '' });
      }
    };





  return (
    <>
  
      <div className="TopSearch">
        <TextFields
          name="nome"
          control={control}
          label="Buscar Pokemon"
          placeholder="digite o nome do Pokemon"
          // 'onSearch' chama handleSearchBarSearch a cada digitação
          onSearch={() => handleSearchBarSearch()}
          // onClear chama handleClearSearchBar
          onClear={handleClearSearchBar}
          searchOnTyping={true}
        />

        <SelectFields
          label="Tipo"
          placeholder="Escolha o tipo do Pokemon"
          name="tipo_primario"
          options={[
            { value: '', label: '----------------' },
            ...(listOptions?.map((tipo) => ({
              value: tipo.nome,
              label: tipo.nome.charAt(0).toUpperCase() + tipo.nome.slice(1),
            })) || [])
          ]}
          control={control}
          onSearch={() => handleSearchBarSearch()}
        />
      </div>
    </>
  );
};

export default SearchField;
