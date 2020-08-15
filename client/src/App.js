import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AgeVer from './components/AgeVer';
import { HashRouter as Router, Route } from 'react-router-dom'
import Mix from './components/Mix';
import Saved from './components/Saved';

function App() {
  return (
    <Router>
     <Navbar/> 
     <div > 
     <Route path='/mix'>
     <Mix/>
     </Route>
     <Route path='/saved'>
     <Saved/>
     </Route>
     <Route exact path='/'>
       <AgeVer/>
     </Route>
      </div>
    </Router>
  );
}

export default App;
