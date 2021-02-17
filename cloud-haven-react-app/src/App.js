import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { TopBar, Home, Test, CustomForm, Sidebar } from './components/components'
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
            console.log(res)
         }) 
   };

   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isContentPushed, setIsContentPushed] = useState(false);
   const showSidebar = () => 
   {
      setIsSidebarOpen(!isSidebarOpen);
      setIsContentPushed(!isContentPushed);
   }
   const className = isSidebarOpen ? "sidebar sidebar-open" : "sidebar";
   

   return (
      <GlobalState.Provider value={[notifs, setNotifs]}>
         <BrowserRouter>
            <div class="App">
               <div class="float-sidebar">
                  <Sidebar isSidebarOpen={isSidebarOpen} className={className} showSidebar={showSidebar}/>
               </div>
              
               <div class="float-sidebar PageFrame">
                  {/*<Sidebar isSidebarOpen={isSidebarOpen} className={className} showSidebar={showSidebar}/>*/}
                  <TopBar />
                  <div class="MainContent">
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
               
            </div>
         </BrowserRouter>
      </GlobalState.Provider>
   );
}

export default App;
