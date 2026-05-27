import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PokemonCard } from '../molecules/PokemonCard';  
import { ActionButton } from '../atoms/ActionButton';      

interface PokemonPageProps {
  onBack: () => void;
}

export const PokemonPage = ({ onBack }: PokemonPageProps) => {
  // Save Pokémon API
  const [pokemons, setPokemons] = useState<any[]>([]);

  // Use the API
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12') 
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return (
     <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: '40px', paddingBottom: '40px' }}>
      
      <Typography variant="h3" gutterBottom>
        Pokédex Académica
      </Typography>

      {/* Box container */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' }}>
        
         {pokemons.map((pokemon, index) => {
          const id = index + 1;  
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return (
            <PokemonCard
              key={id}           
              id={id}         
              name={pokemon.name}
              image={imageUrl}
            />
          );
        })}

      </Box>

       <ActionButton text="Volver al Home" onClick={onBack} />
      
    </Container>
  );
};