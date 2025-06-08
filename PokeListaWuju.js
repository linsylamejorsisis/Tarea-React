import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokeListaWuju = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(data => {
        const lista = data.results.map((pokemon, index) => ({
          name: pokemon.name,
          id: index + 1
        }));
        setPokemons(lista);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>POKEDEX DE TEMU</h1>
      <div className="pokemon-grid">
        {pokemons.map(pokemon => (
          <div
            key={pokemon.id}
            className="pokemon-card"
            onClick={() => navigate(`/pokemon/${pokemon.id}`)}
            
          >
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
              alt={pokemon.name}
            />
            <p>{pokemon.name.toUpperCase()}</p>
            <p>ID: {pokemon.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokeListaWuju;
