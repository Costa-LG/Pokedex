import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';
import AxiosInstance from './Axios';

const SingleItem = ({
  codigo,
  nome,
  tipo1,
  tipo2,
  isPokemon,
  onDelete,
  onUpdate,
  listOptions = []  
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    nome: nome,
    tipo1: tipo1,
    tipo2: tipo2 || ''
  });

  const handleDelete = async () => {
    try {
      await AxiosInstance.delete(`/${isPokemon ? 'pokemons' : 'tipos'}/${codigo}/`);
      if (onDelete) onDelete(codigo);
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar. Verifique o console.");
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async () => {
    try {
      const getTipoCodigo = (nomeOuCodigo) => {
        const encontrado = listOptions.find(
          (t) => t.nome === nomeOuCodigo || String(t.codigo) === String(nomeOuCodigo)
        );
        return encontrado ? encontrado.codigo : null;
      };

      const payload = isPokemon
        ? {
            codigo: codigo,
            nome: editValues.nome,
            tipo_primario: getTipoCodigo(editValues.tipo1),
            tipo_secundario: editValues.tipo2 ? getTipoCodigo(editValues.tipo2) : null
          }
        : {
            codigo: codigo,
            nome: editValues.nome
          };
      console.log("Payload enviado para PUT:", payload);
      await AxiosInstance.put(`/${isPokemon ? 'pokemons' : 'tipos'}/${codigo}/`, payload);
      alert('Atualizado com sucesso!');
      if (onUpdate) {
        const tipo1Nome = listOptions.find(t => t.codigo === payload.tipo_primario)?.nome || '';
        const tipo2Nome = listOptions.find(t => t.codigo === payload.tipo_secundario)?.nome || '';

        onUpdate({
          codigo,
          nome: editValues.nome,
          tipo_primario: payload.tipo_primario,
          tipo_secundario: payload.tipo_secundario,
          tipo_primario_nome: tipo1Nome,
          tipo_secundario_nome: tipo2Nome
        });
      }
      setIsEditing(false);
    } 
    catch (error) {
      console.error(error);
      alert("Erro ao atualizar. Verifique o console.");
    }
  };

  return (
    <div className='Pokemon__item'>
      <div className='Cabecalho'>
        {isEditing ? (
          <>
            <TextField
              name="nome"
              value={editValues.nome}
              onChange={handleEditChange}
              label="Nome"
              size="small"
              fullWidth
            />
            <p className='Pokemon__item--codigo'>#{codigo}</p>
          </>
        ) : (
          <>
            <h2>{nome}</h2>
            <p className='Pokemon__item--codigo'>#{codigo}</p>
          </>
        )}
      </div>

      {isPokemon && (
        <>
          {isEditing ? (
            <>
              <Select
                name="tipo1"
                value={editValues.tipo1}
                onChange={handleEditChange}
                fullWidth
                size="small"
              >
                <MenuItem value=""><em>Sem tipo</em></MenuItem>
                {listOptions.map((tipo) => (
                  <MenuItem key={tipo.codigo} value={tipo.nome}>
                    {tipo.nome.charAt(0).toUpperCase() + tipo.nome.slice(1)}
                  </MenuItem>
                ))}
              </Select>

              <Select
                name="tipo2"
                value={editValues.tipo2}
                onChange={handleEditChange}
                fullWidth
                size="small"
              >
                <MenuItem value=""><em>Sem tipo secundário</em></MenuItem>
                {listOptions.map((tipo) => (
                  <MenuItem key={tipo.codigo} value={tipo.nome}>
                    {tipo.nome.charAt(0).toUpperCase() + tipo.nome.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </>
          ) : (
            <p>Tipo: {tipo1} {tipo2 && ` / ${tipo2}`}</p>
          )}
        </>
      )}

      <div className='buttonsCard'>
        {isEditing ? (
          <>
            <Button onClick={handleSaveEdit} variant="contained" size="small">Salvar</Button>
            <Button onClick={() => setIsEditing(false)} size="small">Cancelar</Button>
          </>
        ) : (
          <>
            <Button onClick={handleDelete} size="small">Deletar</Button>
            <Button onClick={() => setIsEditing(true)} size="small">Editar</Button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleItem;
