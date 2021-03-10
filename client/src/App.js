import React from 'react';
import './App.css';
import AgeVer from './components/AgeVer';
import { useAuthContext } from './AuthStore';
import Routes from './Router';

function App() {
  const { legal } = useAuthContext();
  
  return (
    <div>
{!legal ?
          <AgeVer />
         :
         <Routes/>
    }
          </div>
  );
}

export default App;
