import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuthContext } from './contexts/auth/AuthStore';
import AgeVerificationPage from './pages/AgeVerPage/age-ver.component';
import MainPage from './pages/MainPage/main-page.compnent';


const App = () => {
   const { legal } = useAuthContext();
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => !legal ? <AgeVerificationPage /> : <MainPage />} />

      </Switch>
    </Router>
  );
}

export default App;