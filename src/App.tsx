import { useState } from 'react';

import { Login } from './components/pages/Login';
import { Home } from './components/pages/Home';
import { PokemonPage } from './components/pages/PokemonPage';

function App() {
  type View = 'login' | 'home' | 'pokemon';
  
  // Login default
  const [currentView, setCurrentView] = useState<View>('login');

   const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login onLogin={() => setCurrentView('home')} />;
        
      case 'home':
        return (
          <Home 
            onLogout={() => setCurrentView('login')} 
            onGoToPokemon={() => setCurrentView('pokemon')}
          />
        );
        
      case 'pokemon':
        return <PokemonPage onBack={() => setCurrentView('home')} />;
        
      default:
        return <Login onLogin={() => setCurrentView('home')} />;
    }
  };

  return (
    <>
      {renderView()}
    </>
  );
}

export default App;