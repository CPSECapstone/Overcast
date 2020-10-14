import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './components/components'
import './App.css';

function App() {
   return (
      <div id="app">
         Insert Header Here
         <div id="page">
            <Switch>
               <Route exact path='/'
                  component={() => <Home />} />
            </Switch>
         </div>
      </div>
   );
}

export default App;
