import React,{useState} from 'react'
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../utils/firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.config";
import "../../pages/Login/Login.css";

import "react-toastify/dist/ReactToastify.css";
import {toast} from "react-toastify";

const StudentRegister = () => {
  const navigate = useNavigate();
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const {name,email,password}=userRegister;
  const auth = getAuth();
  const handleRegisterSubmit =(e) => {
    e.preventDefault();
    // console.log(userRegister);   
    createUserWithEmailAndPassword(auth,email,password)
      .then((response) => {
        navigate("/");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        if(error.code === 'auth/weak-password'){
            toast.error('Password should be at least 6 characters');
        }
        if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
        }
      });
  };
  const handleRegisterChange = (e) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  const handlesignupwithGoogle=()=>{
    signInWithGooglePopup();
    navigate("/");
  }
  return (
    <div>
        <form onSubmit={handleRegisterSubmit}>
          <div className="login-input-box">
            <label>Enter your Name</label>
            <input
              type="text"
              required
              name="name"
              value={userRegister.name}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="login-input-box">
            <label>Enter your Email</label>
            <input
              type="email"
              required
              name="email"
              value={userRegister.email}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="login-input-box">
            <label>Enter your Password</label>
            <input
              type="password"
              required
              name="password"
              value={userRegister.password}
              onChange={handleRegisterChange}
            />
          </div>
          <div className="login-input-box">
            <button>Signup</button>
          </div>
        </form>
        <div className="login-input-box">
          <button onClick={handlesignupwithGoogle}>Sign up with Google</button>
        </div>
        <div className="login-input-box" style={{ textAlign: "center" }}>
          <p>
            Already have an account !{" "}
            <span className="render-to-signup">
              <Link to="/login">Sign in</Link>
            </span>
          </p>
        </div>
    </div>
  )
}

export default StudentRegister