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

export function signup(signUpData) {
   console.log("reached signup")
   return post('/Users', signUpData);
}
