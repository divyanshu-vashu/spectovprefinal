import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Styles/Login.css"; 

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://spectov-backend.onrender.com/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      localStorage.setItem("email", data.email);

      window.location = "/page";
    //  alert(res.data)
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-left">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="login-title">Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="login-input"
              style={{backgroundColor:"white"}}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="login-input"
              style={{backgroundColor:"white"}}
            />
            {error && <div className="login-error">{error}</div>}
            <button type="submit" className="login-button">Sign In</button>
          </form>
        </div>
        <div className="login-form-right">
          <h1 className="login-new-title">New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="login-signup-button">Sign Up</button>
          </Link>
          <h1 className="login-new-title">Login as Admin ?</h1>
          <Link to="/admin-login">
            <button type="button" className="login-signup-button">Admin Login</button>
          </Link>
          <h1 className="login-new-title">Forget Password ?</h1>
          <Link to="/forget-password">
            <button type="button" className="login-signup-button">Reset Password</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
