import React, { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserProvider';


const SignIn = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [errorMsg, setErrorMsg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let { signInUser } = useContext(UserContext);
    let navigate = useNavigate();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrorMsg("");
    }, [email, password])

    function handleSubmit(event) {
        event.preventDefault();

        signInUser(email, password).then(() => {
            navigate('/pitches');
        }).catch(err => {
            if (!err?.response) {
                console.log(err);
                setErrorMsg('No Response from Server');
            } else if (err.response?.status === 401) {
                console.log(err);
                setErrorMsg('Not Authorize');
            } else {
                setErrorMsg('Login Failed');
            }
            errRef.current.focus();
        });
    }

    return (
        <div>
            <p ref={errRef} className={errorMsg ? "errormsg" :
                "offscreen"} aria-live="assertive"> {errorMsg}</p>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <span>User's Email:  </span>
                <input type="text"
                    name="email"
                    ref={useRef}
                    autoComplete="off"
                    required
                    onChange={e => setEmail(e.target.value)} />
                <br></br><br></br>
                <span>Password  </span>
                <input type="password"
                    name="password"
                    required
                    onChange={e => setPassword(e.target.value)} />
                <br /><br></br>
                <button>
                    Log In
                </button>
            </form>
            <p>
                Create an Account?
                <span className='line'>
                    <a href="/register"> Create</a>
                </span>
            </p>
        </div>

    );
};

export default SignIn;


