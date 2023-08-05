import React, { useState } from 'react';
import './RegistrationForm.css';

export const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    securityQuestion: '',
    securityAnswer: '',
    termsAndConditions: false,
    privacyPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="securityQuestion">Security Question:</label>
          <select
            id="securityQuestion"
            name="securityQuestion"
            value={formData.securityQuestion}
            onChange={handleChange}
            required
          >
            <option value="">Select a Security Question</option>
            <option value="favorite_pet">What is the name of your favorite pet?</option>
            <option value="maiden_name">What is your mother's name?</option>
            <option value="first_school">Which school did you attend in the first grade?</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="securityAnswer">Security Answer:</label>
          <input
            type="text"
            id="securityAnswer"
            name="securityAnswer"
            value={formData.securityAnswer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="termsAndConditions">
            <input
              type="checkbox"
              id="termsAndConditions"
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
              required
            />
            I agree to the <a href="/terms-and-conditions">Terms and Conditions</a>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="privacyPolicy">
            <input
              type="checkbox"
              id="privacyPolicy"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleChange}
              required
            />
            I agree to the <a href="/privacy-policy">Privacy Policy</a>
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
