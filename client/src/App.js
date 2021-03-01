import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import AgeVer from './components/AgeVer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout';
import ScrollTop from './components/layout/ScrollTop'
import { Store } from './Store';
import SingleDrink from './components/SingleDrink';
import SavedDrinks from './components/SavedDrinks';
import { useAuthContext } from './AuthStore';

function App() {
  const { legal } = useAuthContext();
  return (
    <Router>
      <Switch>
        {!legal ? <Route path='/'>
          <AgeVer />
        </Route> :
          <>
            <Navbar />
            <div className='app'>
              <ScrollTop />
              <Store>
                <Route path='/saved'>
                  <SavedDrinks />
                </Route>
                <Route path='/drink/:id'>
                  <SingleDrink />
                </Route>
                <Route exact path='/'>
                  <Index />
                </Route>
              </Store>
            </div>
          </>}
      </Switch>
    </Router>
  );
}

export default App;
