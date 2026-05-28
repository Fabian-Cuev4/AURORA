import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ActionButton } from '../atoms/ActionButton';

interface PokemonModalProps {
  isOpen: boolean;         
  onClose: () => void;      
  id: number;
  name: string;
  image: string;
}

export const PokemonModal = ({ isOpen, onClose, id, name, image }: PokemonModalProps) => {
 
  const [altura, setAltura] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setAltura(data.height / 10);
          setPeso(data.weight / 10);
        })
        .catch((error) => console.error(error));
    }
  }, [isOpen, id]); 

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ textTransform: 'capitalize', textAlign: 'center', fontWeight: 'bold' }}>
        {name} (Nº {id})
      </DialogTitle>

      <DialogContent sx={{ textAlign: 'center' }}>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '20px' }}
        />
        
         <Box sx={{ bgcolor: '#f5f5f5', padding: '15px', borderRadius: '8px', textAlign: 'left' }}>
          <Typography variant="body2"><strong>Altura:</strong> {altura} m</Typography>
          <Typography variant="body2" sx={{ marginTop: '5px' }}><strong>Peso:</strong> {peso} kg</Typography>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'center', paddingBottom: '20px' }}>
        <ActionButton text="Cerrar" onClick={onClose} />
      </DialogActions>
    </Dialog>
  );
};