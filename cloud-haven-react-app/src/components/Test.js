import React from 'react';
import * as api from '../api.js';

var testConnection = () => {
   api.get('/testConnection')
      .then( data => {
         console.log(data.message);
      });
   api.put('/testConnection', {message: "put test"})
      .then( data => {
         console.log(data.message);
      });
   api.post('/testConnection', {message: "post test"})
      .then( data => {
         console.log(data.message);
      });
   api.del('/testConnection')
      .then( data => {
         console.log(data.message);
      });
}

function Test() {
   testConnection();

   return (
      <div>
         This component is used for testing things out. Check the console to see
         if we connected to the backend!
      </div>
   );
}

export default Test;
