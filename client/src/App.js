import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import AgeVer from './components/AgeVer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout';
import ScrollTop from './components/layout/ScrollTop'
import { useGlobalContext } from './Store';
import SingleDrink from './components/SingleDrink';
import SavedDrinks from './components/SavedDrinks';

function App() {
   const { legal } = useGlobalContext();

  return (
    <Router>
      <Navbar />
      <Switch>
            <div className='app'>
              <ScrollTop />
              <Route path='/saved' component={SavedDrinks}/>
              <Route path='/drink/:id' component={SingleDrink} />
              <Route exact path='/' render={() => !legal ? <AgeVer/> : <Index/>} />
            </div>
      </Switch>
    </Router>
  );
}

export default App;
