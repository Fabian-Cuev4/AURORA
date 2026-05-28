import { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { PokemonTable } from '../organisms/PokemonTable';
import { ActionButton } from '../atoms/ActionButton';

interface TablePageProps {
  onBack: () => void;
}

export const TablePage = ({ onBack }: TablePageProps) => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
      .then((response) => response.json())
      .then((data) => setPokemons(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: '40px', paddingBottom: '40px' }}>
      
      <Typography variant="h3" gutterBottom>
        Datos de la API
      </Typography>

      <Box sx={{ marginBottom: '30px' }}>
        <PokemonTable data={pokemons} />
      </Box>

      <ActionButton text="Regresar" onClick={onBack} />

    </Container>
  );
};