import React, { useState } from "react";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const signIn = (e) => {
    e.preventDefault();

    // some fancy firebase login
    if (!email || !password) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setSubmitButtonDisabled(false);
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log("Error Message", err));
  };
  const register = (e) => {
    e.preventDefault();

    // some fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://th.bing.com/th/id/OIP.M-9GGLYdPwT-D6LdrmgmWAHaEK?pid=ImgDet&rs=1"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <b className="error"> {errorMsg}</b>
          <button
            className="login_signinbutton"
            type="submit"
            disabled={submitButtonDisabled}
            onClick={signIn}
          >
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button onClick={register} className="login_registerbutton">
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
