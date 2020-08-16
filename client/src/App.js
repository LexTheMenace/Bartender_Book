import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import AgeVer from './components/AgeVer';
import { HashRouter as Router, Route } from 'react-router-dom'
import Saved from './components/Saved';
import { Provider } from './context';
import Index from './components/layout';
import ScrollTop from './components/layout/ScrollTop'

function App() {
  return (
    <Provider>
      <Router>
        <Navbar />
        <div >
          <ScrollTop/>
          <Route path='/mix'>
            <Index/>
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
          <Route exact path='/'>
            <AgeVer />
          </Route>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
