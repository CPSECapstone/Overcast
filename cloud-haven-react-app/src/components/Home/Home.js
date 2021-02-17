import React from 'react';
import { TabSystem, NotificationBar } from '../components';
import { Container } from 'react-bootstrap';
import './Home.css';

function Home() {

   return (
      <Container className="Home">
         <TabSystem/>
         <NotificationBar/>
      </Container>
   );
}

export default Home;
