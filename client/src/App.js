import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuthContext } from './contexts/auth/AuthStore';
import AgeVerificationPage from './pages/AgeVerPage/age-ver.component';
import MainPage from './pages/MainPage/main-page.compnent';
import { SavedPage } from './pages/SavedPage/saved-page.component';
import ScrollToTop from './components/ScrollToTop/ScrollTop';

const App = () => {
   const { legal } = useAuthContext();
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route exact path='/' render={() => !legal ? <AgeVerificationPage /> : <MainPage />} />
        <Route exact path='/saved' render={() => !legal ? <AgeVerificationPage /> : <SavedPage />} />
      </Switch>
    </Router>
  );
}

export default App;