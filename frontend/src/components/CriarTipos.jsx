import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Criar = ({onCreation}) => {
    const [post, setPost] = useState({
        codigo: '',
        nome: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prevPost => ({
            ...prevPost,
            [name]: value,
        }));
    };

    const adicionarTipo = async () => {
    try {
        const response = await axios.post('http://localhost:8000/tipos/', post);
        console.log('Tipo criado:', response.data);
        if (onCreation){
            onCreation(response.data);
        }
        setPost({ codigo: '', nome: '' }); // limpa o form
    } catch (error) {
        console.error("Erro ao adicionar Tipo:", error);
        alert("Erro ao adicionar Tipo. Verifique o console.");
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
                label="Nome do Tipo"
                name="nome"
                value={post.nome}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Button variant="contained" onClick={adicionarTipo} className='BotaoCriar'>Adicionar Tipo</Button>
            
        </div>
    );
};

export default Criar;
