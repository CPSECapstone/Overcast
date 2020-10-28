import axios from 'axios';

/* Put all api calls in this file. Whenever you want to populate a component's state
 * or otherwise hit the backend api for data, use or add a function in this file.
 */

const baseURL = "http://localhost:5000";

export function post(endpoint, body) {
   return axios.post(`${baseURL}${endpoint}`, body)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function put(endpoint, body) {
   return axios.put(`${baseURL}${endpoint}`, body)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function get(endpoint) {
   return axios.get(`${baseURL}${endpoint}`)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function del(endpoint) {
   return axios.delete(`${baseURL}${endpoint}`)
      .then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
}

export function getFormData(companyName, formName) {
   //return get(`:${companyName}/:${formName}`);
   /*return {
      formDescription: "this was a description",
      fields: [
         {
            type: textbox,
            label: "First Name"
         },
         {
            type: textbox,
            label: "Last Name"
         },
         {
            type: email,
            label: "Email"
         },
         {
            type: phoneNumber,
            label: "Phone Number"
         }
      ]
   }*/ 
}

// get('/:companyName/:formName')