import { Container, Typography } from '@mui/material';
import { ActionButton } from '../atoms/ActionButton';

interface HomeProps {
  onLogout: () => void;
  // Funciones que App.tsx nos pasará para cambiar de pantalla
  onGoToCalculator: () => void;
  onGoToPokemon: () => void;
}

export const Home = ({ onLogout, onGoToCalculator, onGoToPokemon }: HomeProps) => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h3" gutterBottom>
        Home Page
      </Typography>

      <Typography variant="body1">
        Choose an application:
      </Typography>

      <br /><br />
      
      <ActionButton text="Calculator App" onClick={onGoToCalculator} />
      
      <br /><br />
      
      <ActionButton text="Pokemon App" onClick={onGoToPokemon} />

      <br /><br /><br />
      
      <ActionButton text="Log Out" onClick={onLogout} />
    </Container>
  );
};