import React from 'react';
import * as api from '../api.js';

var testConnection = () => {
   const res = api.testBackendConnection();
   console.log(res);
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
