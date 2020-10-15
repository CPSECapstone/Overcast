/* Put all api calls in this file. Whenever you want to populate a component's state
 * or otherwise hit the backend api for data, use or add a function in this file.
 */

const baseURL = ""; // once we have a url for our backend, put it here
const headers = new Headers();

headers.set('Content-Type', 'application/JSON');
const reqConf = {
   headers: headers,
   credentials: 'include',
};

var makeHttpRequest = (endpoint, method, body) => {
   return fetch(baseURL + endpoint, {
      method: method,
      body: JSON.stringify(body),
      mode: 'cors',
      ...reqConf
   })
    .then(res => {
       return res.json();})
    .then((result) => {
      return result;
   });
}

export function post(endpoint, body) {
   return makeHttpRequest(endpoint, 'POST', body);
}

export function put(endpoint, body) {
   return makeHttpRequest(endpoint, 'PUT', body);
}

export function get(endpoint) {
   return makeHttpRequest(endpoint, 'GET');
}

export function del(endpoint) {
   return makeHttpRequest(endpoint, "DELETE");
}
