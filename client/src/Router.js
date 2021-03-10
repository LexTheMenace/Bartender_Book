import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout';
import ScrollTop from './components/layout/ScrollTop'
import { Store } from './Store';
import SingleDrink from './components/SingleDrink';
import SavedDrinks from './components/SavedDrinks';
import Navbar from './components/layout/Navbar';

const Routes = () => {
    return (
        <div>
            <Router>
      <Switch>
        
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
          </>
      </Switch>
    </Router>
        </div>
    )
}

export default Routes
