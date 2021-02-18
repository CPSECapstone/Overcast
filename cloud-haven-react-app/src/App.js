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
   const showSidebar = () => setIsSidebarOpen(!isSidebarOpen);
   const className = isSidebarOpen ? "sidebar sidebar-open" : "sidebar";
   const classPageFrame = isSidebarOpen ? "PageFrame PageFrame-open" : "PageFrame";

   return (
      <GlobalState.Provider value={[notifs, setNotifs]}>
         <BrowserRouter>
            <div id="App">

               <div id="SidebarMenu">
                  <Sidebar isSidebarOpen={isSidebarOpen} className={className} showSidebar={showSidebar}/>
               </div>
              
               <div class={classPageFrame}>
                  <TopBar />
                  <div id="MainContent">
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
