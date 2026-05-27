import { useState } from 'react';
import { Login } from './components/pages/Login';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
     return <Login onLogin={() => setIsLoggedIn(true)} />;
  }
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Bienvenido al Home!</h1>
      <p>Aquí irán los dos botones de tu actividad.</p>
      
       <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>
    </div>
  );
}

export default App;