import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface PokemonData {
  name: string;
  url: string;
}

interface PokemonTableProps {
  data: PokemonData[];
}

export const PokemonTable = ({ data }: PokemonTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="tabla de pokemon">
        
        {/* HEAD*/}
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Nº</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Nombre del Pokémon</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Enlace de la API</TableCell>
          </TableRow>
        </TableHead>
        
        {/* BODY */}
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{index + 1}</TableCell>
              <TableCell sx={{ textTransform: 'capitalize' }}>{row.name}</TableCell>
              <TableCell>{row.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
};