import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Test, CustomForm } from './components/components'
import './App.css';

function App() {
   return (
      <div id="app">
         Insert Header Here
         <div id="page">
            <Switch>
               <Route exact path='/'
                  component={() => <Home />} />
               <Route exact path='/customForm'
                  component={() => <CustomForm />} />
               <Route exact path='/test'
                  component={() => <Test />} />
            </Switch>
         </div>
      </div>
   );
}

export default App;
