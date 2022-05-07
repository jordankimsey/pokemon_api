import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  //set useState data for app and pass state into api call
  //make api call with use effect

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(1);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((res) => res.json())
      .then((res) => {
        setPokemonList(res.results);
      });
  }, []);

  const handleSelected = (e) => {
    setSelectedPokemon(e.target.value);
  };

  const handleNext = (e) => {
    if (selectedPokemon < pokemonList.length - 1) {
    setSelectedPokemon(selectedPokemon + 1);  
    }
  }

  const handlePrev = (e) => {
    if (selectedPokemon > 1) {
    setSelectedPokemon(selectedPokemon - 1);  
    }
    
  }

  const pokemonName = pokemonList.map((pokemon, index) => (
    <option key={index} value={index + 1}>
      {pokemon.name}
    </option>
  ));

  return (
    <div>
      <div className='select'>
        <select
          name='select'
          placeholder='select'
          id={pokemonName}
          onChange={handleSelected}
          value={selectedPokemon}
        >
          {pokemonName}
        </select>
      </div>
      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${selectedPokemon}.png`}
          alt='pokemon image'
        />
      </div>
      <div>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
      
    </div>
  );
}
