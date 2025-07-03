import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Controller } from 'react-hook-form';

const tipos = [
  {
    value: 'USD',
    label: '$',
  },
];

export default function SelectFields(props) {
  const {label, placeholder, name, control} = props


  return (
    <Controller
      name = {name}
      control = {control}
      render = {({
        field:{onChange, value},
        fieldState:{error},
        formState,
      }) => (

        <TextField
          id="outlined-select-currency"
          select
          label = {label}
          defaultValue=""
          helperText="Selecione o tipo"
        >
          {tipos.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )
      }
    />
  );
}

