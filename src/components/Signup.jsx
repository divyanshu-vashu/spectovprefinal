import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Signup.css"; // Import the CSS file

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
    <div className="signup-container">
      <div className="signup-form-container">
        <div className="signup-left">
          <h1 className="signup-title">Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="signup-signin-button">Sign in</button>
          </Link>
        </div>
        <div className="signup-right">
          <form onSubmit={handleSubmit} className="signup-form">
            <h1 className="signup-title">Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className="signup-input"
              style={{backgroundColor:"white"}}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className="signup-input"
              style={{backgroundColor:"white"}}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className="signup-input"
              style={{backgroundColor:"white"}}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className="signup-input"
              style={{backgroundColor:"white"}}
            />
            {error && <div className="signup-error">{error}</div>}
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
