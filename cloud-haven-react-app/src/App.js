import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TopBar, Home, Test, CustomForm, Sidebar } from './components/components'
import './App.css';

function App() {
   return (
      <div id="App">
         <div id="PageFrame">
            {/*<TopBar/>*/}
            <div id="MainContent">
               <Switch>
                  <Route exact path='/'
                     component={() => <Home />} />
                  <Route exact path='/customForm'
                     component={() => <CustomForm />} />
                  <Route exact path='/test'
                     component={() => <Home />} />
                  <Route exact path='/sidebar'
                     component={() => <Sidebar />} />
               </Switch>
            </div>
         </div>
      </div>
   );
}

export default App;
