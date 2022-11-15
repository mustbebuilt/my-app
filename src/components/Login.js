import { useState, useEffect, useRef } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const submitLogin = (ev) => {
    ev.preventDefault();
    console.info(loginInputRef.current.value);
    console.info(pwInputRef.current.value);
    let loginCreds = {
      user: loginInputRef.current.value,
      password: pwInputRef.current.value,
    };
    //
    const dataFeed = JSON.stringify(loginCreds);
    let authURL = "http://localhost:3001/login";
    fetch(authURL, {
      method: "POST",
      mode: "cors",
      body: dataFeed,
      headers: {
        "Content-Type": "application/json",
        //withCredentials: true,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.jwt) {
          setAuth({ user: loginInputRef.current.value });
          navigate("/cms");
        } else {
          setErrMsg("Login Error");
        }
      });
    //
  };
  const loginInputRef = useRef();
  const pwInputRef = useRef();

  const [errMsg, setErrMsg] = useState("");
  return (
    <div>
      <form>
        <p>{errMsg}</p>
        <div>
          <label>Login</label>
          <input type='text' ref={loginInputRef}></input>
        </div>
        <div>
          <label>Password</label>
          <input type='password' ref={pwInputRef}></input>
        </div>
        <div>
          <button onClick={submitLogin}>Login</button>
        </div>
      </form>
    </div>
  );
}
export default Login;
