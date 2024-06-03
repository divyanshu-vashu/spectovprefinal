import React, { useState } from "react";

function LoginPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegisterInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted with:", loginData);
    // Add your login logic here
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted with:", registerData);
    // Add your register logic here
  };

  const toggleForm = () => {
    setIsLoginForm((prevIsLoginForm) => !prevIsLoginForm);
  };

  return (
    <div>
      <h1>{isLoginForm ? "Login Page" : "Register Page"}</h1>
      {isLoginForm ? (
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="login-email">Email:</label>
            <input
              type="email"
              id="login-email"
              name="email"
              value={loginData.email}
              onChange={handleLoginInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="login-password">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={loginData.password}
              onChange={handleLoginInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Register
            </button>
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegisterSubmit}>
          <div>
            <label htmlFor="register-email">Email:</label>
            <input
              type="email"
              id="register-email"
              name="email"
              value={registerData.email}
              onChange={handleRegisterInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="register-password">Password:</label>
            <input
              type="password"
              id="register-password"
              name="password"
              value={registerData.password}
              onChange={handleRegisterInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="register-confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="register-confirm-password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleRegisterInputChange}
              required
            />
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account?{" "}
            <button type="button" onClick={toggleForm}>
              Login
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
