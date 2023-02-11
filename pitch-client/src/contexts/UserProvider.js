import axios from "axios";
import { useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const [usersAll, setUsersAll] = useState([])
    const [loginedUser, setLoginedUser] = useState([]);
    // const [signIn, setSignIn] = useState([])

    const baseURL = "http://localhost:3000/api/users/";
    
    useEffect(() => {
        async function getData() {
            await allUsers();
        }
        getData();
    }, []);
    
    function allUsers() {
        return axios.get(baseURL).then(response => setUsersAll(response.data));
    }
    // use to filter users

    function generateUser(email, password) {
        let user = { email, password };

        return axios.post(baseURL, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function signInUser(email, password) {
        let user = { email, password }

        return axios.post(`${baseURL}/signin`, user)
            .then(response => {
                localStorage.setItem('pitchToken', response.data.token)
                return new Promise(resolve => resolve(response.data));
            }
            );
    }

    function getUser(id) {
        let user = { email, password }
        return axios.get(baseURL + id, user)
            .then(response => {
                localStorage.setItem('pitchToken', response.data.token)
                setLoginedUser(response.data)
                return new Promise(resolve => resolve(response.data));
            })
    }
   
    function signOutUser() {
        localStorage.removeItem(token)
        setLoginedUser({})
        console.log("User logged out")
    }
   
    // }
    // function verifieCurrentUser =async()=>{
    //         led decode = await jwt
    //         return setCurrentUser(decode)
    //     }

    return (
        <UserContext.Provider value={{
            allUsers,
            generateUser,
            signInUser,
            getUser,
            loginedUser,
            usersAll,
            signOutUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}