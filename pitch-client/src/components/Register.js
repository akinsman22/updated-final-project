import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserProvider";

const Register = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
  });

  let { generateUser, signInUser } = useContext(UserContext);
  let navigate = useNavigate();

  function handleChange(e) {
    setNewUser((preValue) => {
      return { ...preValue, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    generateUser(newUser)
      .then((response) => {
        navigate("/user")
      })
      .catch((error) => {
        console.log(error);
        window.alert("Failed in creating user");
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <span>User's Email: </span>
        <input
          type="text"
          name="email"
          autoComplete="off"
          required
          value={newUser.email}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <span>Password: </span>
        <input
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleChange}
        />
        <br />
        <br></br>
        <span>First Name: </span>
        <input
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={handleChange}
        />
        <br />
        <br></br>
        <span>Last Name: </span>
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={handleChange}
        />
        <br />
        <br></br>
        <span>Gender: </span>
        <input
          type="text"
          name="gender"
          value={newUser.gender}
          onChange={handleChange}
        />
        <br />
        <br></br>
        <span>Age: </span>
        <input
          type="number"
          name="age"
          value={newUser.age}
          onChange={handleChange}
        />

        <br />
        <br></br>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default Register;
