import { useState } from "react";
import { registerUser, loginUser } from "../api";

export default function Auth({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const res = await registerUser({ email, password });
    alert(JSON.stringify(res));
  };

  const login = async () => {
    const res = await loginUser({ email, password });

    if (res.access_token) {
      localStorage.setItem("token", res.access_token);
      setPage("dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Auth</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </div>
  );
}