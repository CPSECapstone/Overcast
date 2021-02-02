import React from 'react';
import { TabSystem } from '../components';
import NotifTest from '../Notifications/NotificationBar';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {

   return (
      <Container>
         <TabSystem/>
         {/* <NotifTest/> */}
      </Container>
   );
}

export default Home;
