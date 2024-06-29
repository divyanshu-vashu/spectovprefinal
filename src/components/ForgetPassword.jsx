import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Login.css"; 

const ForgetPassword = () => {
  const [inputemail, setInputemail] = useState({ email: '' });
  const [inputpass, setInputpass] = useState({ password: '' });
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputemail.email, inputpass.password);
    try {
      await axios.post(`https://spectov-backend.onrender.com/api/user/forget-password/${inputpass.password}/${inputemail.email}`);
      navigate("/login")
      
    } catch (error) {
      console.log(error);
      setError("No user exist with this email."); 
    }
  };

  const handleChangeEmail = (e) => {
    setInputemail({ email: e.target.value });
  };

  const handleChangePassword = (e) => {
    setInputpass({ password: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <div className="login-form-left">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="login-title">Reset Password</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeEmail}
              value={inputemail.email}
              required
              className="login-input"
              style={{ backgroundColor: "white" }}
            />
            <input
              type="password"
              placeholder="Enter New Password"
              name="password"
              onChange={handleChangePassword}
              value={inputpass.password}
              required
              className="login-input"
              style={{ backgroundColor: "white" }}
            />
            {error && <div className="login-error">{error}</div>}
            <button type="submit" className="login-button">Update Password</button>
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
          <h1 className="login-new-title">Already Registered ?</h1>
          <Link to="/login">
            <button type="button" className="login-signup-button">Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
