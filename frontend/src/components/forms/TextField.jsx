import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';

const TextFields = ({ name, control, label, placeholder, onSearch, searchOnTyping = false }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          id={`outlined-basic-${name}`}
          label={label}
          variant="outlined"
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => {
            onChange(e); // atualiza no RHF
            if (searchOnTyping && onSearch) {
              onSearch(e.target.value); // executa busca
            }
          }}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};


export default TextFields;