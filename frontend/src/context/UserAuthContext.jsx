import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const itemKey = "userLogin";
const userAuthContext = createContext();

async function signInWithUserNameAndPassword(username, password) {
  return await axios.post('/account/login', {username, password})
      .then(res => res.data)
      .then(res => {
        localStorage.setItem(itemKey, JSON.stringify({...res, username}));
      })
}

async function createUserWithUserNameAndPassword(username, email, first_name, last_name, password) {
  return await axios.post('/account/register', {username, email, first_name, last_name, password})
      .then(res => res.data)
      .then(res => {
        res
    })
}

function signOut() {
  localStorage.removeItem("userLogin");
  return true;
}


export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(itemKey)) ?? {});

  async function logIn(userName, password) {
    return await signInWithUserNameAndPassword(userName, password);
  }
  async function signUp(userName, email, firstName, lastName, password) {
    return await createUserWithUserNameAndPassword(userName, email, firstName, lastName, password);
  }
  function logOut() {
    return signOut();
  }

  const storageChangeEvent = () => {
    setUser(JSON.parse(localStorage.getItem(itemKey)));
  }
  useEffect(() => {
    window.addEventListener("storage", storageChangeEvent);
    return () => window.removeEventListener("storage", storageChangeEvent);
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
