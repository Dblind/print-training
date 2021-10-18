import axios from "axios";

const cl = console.log;

const baseURL = "http://localhost:3000";

export const authenticationAPI = {
  createUser,
  searchByLogin,
  loginUser,
  getMyTexts,
  sendMyTexts,
}

async function createUser(dataUser) {
  let repeated = await searchByLogin(dataUser.login);
  if (repeated.data.length == 0) {
    const response = await axios.get(`${baseURL}/users/0`);
    const newId = response.data.counterId + 1;
    const patch = await patchUser({ id: 0, counterId: newId, });
    const remoteTexts = await createRemoteTexts(newId, dataUser.login);

    return axios.post(`${baseURL}/users`, { id: newId, ...dataUser, });
  } else return Promise.reject(new Error("This login already exist."));
}

async function loginUser(dataUser) {
  const response = await searchByLogin(dataUser.login);
  if (response.data.length == 1 && response.data[0].password == dataUser.password) {
    return response;
  } else return Promise.reject(new Error("Login user or password not found."));
}

function getMyTexts(id) {
  return fetch(`${baseURL}/texttemplates/${id}`)
    // .then(r => r.json())
    // .then(r => cl(r));
}
// cl(getMyTexts(19));

async function createRemoteTexts(id, login) {
  const texts = await axios.post(`${baseURL}/texttemplates`, {
    id: id,
    login: login,
    texts: [],
  });
  console.log(texts);
}
// sendText();



function sendMyTexts(id, texts) {
  return fetch(`${baseURL}/texttemplates/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      // id: id,
      // login: "r2",
      texts: texts,
    }),
  })
}

// sendMyTexts(19, ["new ", "2"]);

// createUser();

// <-- tamplates -->

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

function patchUser(userData) {
  return axios.patch(`${baseURL}/users/${userData.id}`, userData);
}

function searchByLogin(login) {
  return axios.get(`${baseURL}/users?login=${login}`);
}



// fetch

async function getUsersFetch() {
  let jsonF;
  let a = await fetch("http://localhost:3000/users")
  // await fetch("http://localhost:3000/users")
  jsonF = await a.json();


}

// getUsersFetch();

async function setUserFetch() {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ id: 0, counterId: 0, }),
  });
  cl(await response.text());
}

// setUserFetch();

async function deleteUserFetch(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "GET",
  });
  cl(await response.text());
}

// deleteUserFetch(43);
