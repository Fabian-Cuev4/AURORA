import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { ActionButton } from '../atoms/ActionButton'; 

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
}

export const PokemonCard = ({ id, name, image }: PokemonCardProps) => {
  return (

    <Card sx={{ maxWidth: 345, margin: '15px' }}>
      <CardMedia
        sx={{ height: 140, backgroundSize: 'contain' }} // avoid cut the image|
        image={image} 
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
          {name} {/* Dinamic Variable */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Este es el Pokémon número {id} de la Pokédex oficial.
        </Typography>
      </CardContent>
      <CardActions>

        <ActionButton text="Share" onClick={() => console.log('Compartir')} />
        <ActionButton text="Learn More" onClick={() => console.log('Detalles')} />
      </CardActions>
    </Card>

  );
};