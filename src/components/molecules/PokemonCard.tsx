import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ActionButton } from '../atoms/ActionButton';
import { PokemonModal } from '../organisms/PokemonModal'; 

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
}

export const PokemonCard = ({ id, name, image }: PokemonCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [descripcion, setDescripcion] = useState<string>('');

  useEffect(() => {

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((response) => response.json())
      .then((data) => {

        const textoEs = data.flavor_text_entries.find(
          (entry: any) => entry.language.name === 'es'
        );
        setDescripcion(textoEs ? textoEs.flavor_text : 'Descripción no disponible.');
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: '15px', textAlign: 'left', display: 'inline-block' }}>
        
        <CardMedia sx={{ height: 140, backgroundSize: 'contain', marginTop: '10px' }} image={image} title={name} />
        
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
            {name}
          </Typography>
          
          <Typography variant="body2" sx={{ color: 'text.secondary', minHeight: '60px' }}>
            {descripcion}
          </Typography>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', paddingBottom: '15px' }}>
          <ActionButton text="Learn More" onClick={() => setIsModalOpen(true)} />
        </CardActions>
      </Card>

      {/* float*/}
      <PokemonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        id={id} 
        name={name} 
        image={image} 
      />
    </>
  );
};