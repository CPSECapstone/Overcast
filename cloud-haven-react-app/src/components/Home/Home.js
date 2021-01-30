import React from 'react';
import { TabSystem } from '../components';
import NotifTest from '../Notifications/NotificationBar';
import './Home.css';

function Home() {

   return (
      <div>
         <TabSystem/>
         <NotifTest/>
      </div>
   );
}

export default Home;
