import { useRef } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const submitLogin = (ev) => {
    ev.preventDefault();
    console.info(loginInputRef.current.value);
    console.info(pwInputRef.current.value);
    if (
      loginInputRef.current.value === "admin" &&
      pwInputRef.current.value === "letmein"
    ) {
      setAuth({ user: loginInputRef.current.value });
      navigate("/cms");
    }
  };
  const loginInputRef = useRef();
  const pwInputRef = useRef();
  return (
    <div>
      <form>
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
