import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PokeDetalles = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [id]);

  if (!pokemon) return <div style={{ textAlign: 'center' }}>Un momento, por favor...</div>;

  return (
  <div className="pokemon-detail">
    <h1>{pokemon.name.toUpperCase()} - #{pokemon.id}</h1>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    <p><strong>Altura:</strong> {pokemon.height}</p>
    <p><strong>Peso:</strong> {pokemon.weight}</p>

    <div style={{ marginTop: 20 }}>
      <button onClick={() => navigate('/')}>Volver</button>{' '}
      {+id > 1 && (
        <button onClick={() => navigate(`/pokemon/${+id - 1}`)}>Anterior</button>
      )}{' '}
      {+id < 151 && (
        <button onClick={() => navigate(`/pokemon/${+id + 1}`)}>Siguiente</button>
      )}
    </div>
  </div>
);

  
};

export default PokeDetalles;
