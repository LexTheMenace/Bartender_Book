import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import AgeVer from './components/AgeVer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout';
import ScrollTop from './components/layout/ScrollTop'
import { useGlobalContext } from './Store';
import SingleDrink from './components/SingleDrink';

function App() {
   const { legal } = useGlobalContext();

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
              {/*  <Route path='/saved'>
            <Saved />
          </Route> */}
            <Route path='/drink/:id'>
                <SingleDrink/>
              </Route>
              <Route exact path='/'>
                <Index />
              </Route>
            </div>
          </>}
      </Switch>
    </Router>
  );
}

export default App;
