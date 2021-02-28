import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { TopBar, Home, Test, CustomForm, VendorApp, Sidebar} from './components/components'
import GlobalState from './GlobalState';
import * as api from './api.js';
import './App.css';

function App() {
   const [notifs, setNotifs] = useState({
      notifications: []
   });  

   useEffect(() => {
      getNotifications()
   }, []);

   const getNotifications = () => {
      api.getNotifs()
         .then(res => {
            setNotifs(res);
         }) 
   };

   return (
      <GlobalState.Provider value={[notifs, setNotifs]}>
         <BrowserRouter>
            <div id="App">
               <Sidebar />
               <div id="PageFrame">
                  <TopBar />
                  <div id="MainContent">
                     <Switch>
                        <Route exact path='/'
                           component={() => <Home />} />
                        <Route exact path='/customForm'
                           component={() => <CustomForm />} />
                        <Route exact path='/vendorApp'
                           component={() => <VendorApp />} />
                        <Route exact path='/test'
                           component={() => <Test />} />
                     </Switch>
                  </div>
               </div>
            </div>
         </BrowserRouter>
      </GlobalState.Provider>
   );
}

export default App;
