import axios from "axios";

const API_KEY = AIzaSyB4LenfITAtx0z4qcrodzLbS8aHcngwej8;

export async function authenticate(mode, email, password) {
  // mode: "signInWithPassword" | "signUp"
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
