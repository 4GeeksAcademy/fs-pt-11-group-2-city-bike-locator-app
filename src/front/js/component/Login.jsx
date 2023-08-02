import React, { useState } from 'react';
import './Login.css'; // Import a CSS file for styling (create Login.css in the same directory as the component)

export const Login = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Event handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., send form data to the backend for validation)
    console.log('Login data:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="forgot-password">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <div className="form-group">
            <button type="submit" className="signin-button">Sign In</button>
          </div>
          <div className="signup-quote-container">
            <p>Don't have an account? <a href="/signup" className="signup-link">Sign up here</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
