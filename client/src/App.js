import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import AgeVer from './components/AgeVer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Saved from './components/Saved';
import { Provider } from './context';
import Index from './components/layout';
import ScrollTop from './components/layout/ScrollTop'
import { useGlobalContext } from './Store';

function App() {
 const { legal } = useGlobalContext();

  return (
    <Provider>
      <Router>
        <Switch>
{ !legal ? <Route exact path='/'>
  <AgeVer/>
</Route> :
        <div >
        <Navbar />
          <ScrollTop/>
          <Route path='/mix'>
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
          <Route exact path='/'>
            <Index/>
          </Route>
        </div>}
        </Switch>
      </Router>
    </Provider>

  );
}

export default App;
