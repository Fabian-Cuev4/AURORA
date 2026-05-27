
import { useState } from 'react';
import {Container, Typography} from '@mui/material';
import { TextInput } from '../atoms/TextInput';
import { ActionButton } from '../atoms/ActionButton';



interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
     if (username === 'admin' && password === 'admin') {
       onLogin();  
      } 
    
  };

  return (
    <Container maxWidth="xs" sx={{ textAlign: 'center', marginTop: '50px' }}>
      
      <Typography variant="h4">
        Login
      </Typography>

      <TextInput 
        label="Username" 
        value={username} 
        onChange={setUsername} 
      />
      
      <TextInput 
        label="Password" 
        type="password" 
        value={password} 
        onChange={setPassword} 
      />
      
      <br /><br />
      
      <ActionButton text="Sign In" onClick={handleLoginClick} />

    </Container>
  );
}