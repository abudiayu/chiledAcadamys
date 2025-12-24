import { useState } from "react";
import "./login.css";
import { loginUser } from "../../../services/loginService.jsx";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      setColor("red");
      setMessage("Please fill in all fields!");
      return;
    }

    setLoading(true);
    setMessage("");

    const response = await loginUser({
      username,
      password,
    });

    setLoading(false);
    if (response.status === true || response.success === true) {
      setColor("green");
      setMessage("Login successful! Welcome!");
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
    } else {
      setColor("red");
      setMessage(response.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome Kids!</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

      {message && <p style={{ color }}>{message}</p>}
    </div>
  );
}
export default Login;
