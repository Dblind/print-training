import axios from "axios";

const cl = console.log;

const baseURL = "http://localhost:3000";

export const getUsers = () => {
  return axios.get(
    `${baseURL}/users`
  );
}

const user = {
  "id": 43,
  "name": "Bob",
  "location": "USA",
}
export const setUser = () => {
  return axios.post(
    `${baseURL}/users`, user
  );
}

export const deleteUser = (id) => {
  return axios.delete(
    `${baseURL}/users/${id}`
  ).catch(error => console.log(error));
}

// console.log(deleteUser(7));
// cl("test");

let user2 = {
  fff: [],
}
export const newCategory = () => {
  return axios.post(
    `${baseURL}/users`, user2
  );
}
// cl(newCategory());