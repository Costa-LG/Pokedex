import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';

const Criar = ({op, cr}) => {
    const [post, setPost] = useState({
        codigo: '',
        nome: '',
        tipo_primario: '',
        tipo_secundario: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value,
        }));
    };


    const adicionarPokemon = async () => {
    try {
      const payload = {
        codigo: post.codigo,
        nome: post.nome,
        tipo_primario: post.tipo_primario || null,
        tipo_secundario: post.tipo_secundario || null,
      };

      const response = await axios.post('http://localhost:8000/pokemons/', payload);
      console.log('Pokemon criado:', response.data);

      if (onCreation) {
        onCreation(response.data);
      }

      setPost({
        codigo: '', nome: '', tipo_primario: '', tipo_secundario: '',
      });
    } catch (error) {
      console.error("Erro ao adicionar Pokémon:", error);
      alert("Erro ao adicionar Pokémon. Verifique o console.");
    }
  };

    return (
        <div className='FormularioPokemon'>
            <TextField className='CaixaDeEntrada'
                variant="outlined"
                label="Código"
                name="codigo"
                value={post.codigo}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField 
                variant="outlined"
                label="Nome do Pokémon"
                name="nome"
                value={post.nome}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Select className='CaixaDeEntrada'
                name="tipo_primario"
                value={post.tipo_primario}
                onChange={handleChange}
                displayEmpty
                fullWidth
                margin="normal"
                >
                <MenuItem value="">
                    <em>-----------------</em>
                </MenuItem>
                {op?.map((tipo) => (
                    // <MenuItem key={tipo.nome} value={tipo.nome}>
                    // {tipo.nome.charAt(0).toUpperCase() + tipo.nome.slice(1)}
                    // </MenuItem>
                    <MenuItem key={tipo.codigo} value={tipo.codigo}>
                        {tipo.nome.charAt(0).toUpperCase() + tipo.nome.slice(1)}
                    </MenuItem>
                ))}
            </Select>

            <Select className='CaixaDeEntrada'
                name="tipo_secundario"
                value={post.tipo_secundario}
                onChange={handleChange}
                displayEmpty
                fullWidth
                margin="normal"
                >
                <MenuItem value="">
                    <em>-----------------</em>
                </MenuItem>
                {op?.map((tipo) => (
                    <MenuItem key={tipo.nome} value={tipo.nome}>
                    {tipo.nome.charAt(0).toUpperCase() + tipo.nome.slice(1)}
                </MenuItem>
                ))}
            </Select>

            <Button variant="contained" onClick={adicionarPokemon} className='BotaoCriar'>Adicionar Pokémon</Button>
            
        </div>
    );
};

export default Criar;
