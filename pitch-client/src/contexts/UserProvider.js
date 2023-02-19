import axios from "axios";
import React, { useEffect, useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [usersAll, setUsersAll] = useState([]);
  const [loginedUser, setLoginedUser] = useState([]);
  const [ currentUser, setCurrentUser ] = useState({})
  // const [signIn, setSignIn] = useState([])

  const baseURL = "http://localhost:3000/api/users/";

  useEffect(() => {
    async function getData() {
      await allUsers();
    }
    getData();


  }, []);

  function allUsers() {
    return axios.get(baseURL).then((response) => {
      console.log(response.data);
      setUsersAll(response.data);
    });
  }
  // use to filter users

  function generateUser(userData) {
    return axios.post(baseURL, userData).then((response) => {
      console.log(response)
      setCurrentUser(response.data)
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signInUser(email, password) {
    let user = { email, password };

    return axios.post(`${baseURL}/signin`, user).then((response) => {
      localStorage.setItem("pitchToken", response.data.token);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function getUser(token) {
    return axios.get(`${baseURL}/signin`, token).then((response) => {
      console.log(response);
      localStorage.setItem("pitchToken", response.data.token);
      setLoginedUser(response.data);
      return new Promise((resolve) => resolve(response.data));
    });
  }

  function signOutUser() {
    localStorage.removeItem("token");
    setLoginedUser({});
    console.log("User logged out");
  }

  // }
  // function verifieCurrentUser =async()=>{
  //         led decode = await jwt
  //         return setCurrentUser(decode)
  //     }



  return (
    <UserContext.Provider
      value={{
        allUsers,
        generateUser,
        signInUser,
        getUser,
        loginedUser,
        usersAll,
        signOutUser,
        currentUser
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
