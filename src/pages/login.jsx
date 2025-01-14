import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [RegSuccess, setRegSuccess] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const navigate = useNavigate();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleCreateAccount(event) {
    event.preventDefault();
    setTimeout(() => {
      setHasAccount(!hasAccount);
      setError('');
      resetForm();
    }, 1000);
  }

  async function registerUser(event) {
  event.preventDefault();
  try {
    const response = await fetch('http://localhost:8000/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      setRegSuccess(true);
      setTimeout(() => {
        handleCreateAccount();
      }, 1000);
      resetForm();
    } else {
      if (data.message === 'Username already exists') {
        setError('Username already exists. Please choose a different username.');
      } else {
        setError(data.message || 'Registration failed.');
      }
      setRegSuccess(false);
    }
  } catch (error) {
    console.error('Error:', error);
    setError('An error occurred during registration. Please try again later.');
    setRegSuccess(false);
  }
}

  function handleRegisterSubmit(event) {
    event.preventDefault();
    if (formData.username === '' || formData.password === '' || formData.confirmPassword === '') {
      setError('Please fill in all fields.');
      setRegSuccess(false);
    } else if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setRegSuccess(false);
    } else {
      setError('');
      registerUser(event);
    }
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();

    if (formData.username === '' || formData.password === '') {
      setError('Please fill in all fields.');
      setSuccess(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/admin');
          resetForm();
        }, 1500);
      } else {
        setError(data.message || 'Login failed.');
        setSuccess(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred during login. Please try again later.');
      setSuccess(false);
    }
  }

  function resetForm() {
    if (hasAccount) setFormData({ username: '', password: '', confirmPassword: '' });
    setTimeout(() => {
      setError('');
      setSuccess(false);
      setRegSuccess(false);
    }, 2000);
  }

  return (
    <div className="admin-page-container">
      <div className="login-container">
        {hasAccount ? (
          <>
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLoginSubmit} className="login-form">
              <div className="login-form-group">
                <label htmlFor="username" className="login-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password" className="login-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
              </div>
              {error && <p className="login-error-message">{error}</p>}
              {success && <p className="login-success-message">Login successful!</p>}
              <button type="submit" className="login-button">Login</button>
              <p className="create-account-link">
                Don't have an account? 
                <a href="#" onClick={handleCreateAccount}>Register</a>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="login-title">Register</h2>
            <form onSubmit={handleRegisterSubmit} className="login-form">
              <div className="login-form-group">
                <label htmlFor="username" className="login-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="password" className="login-label">New Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
              </div>
              <div className="login-form-group">
                <label htmlFor="confirmPassword" className="login-label">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="login-input"
                  required
                />
              </div>
              {error && <p className="login-error-message">{error}</p>}
              {RegSuccess && <p className="login-success-message">Account registered</p>}
              <button type="submit" className="login-button">Register</button>
              <p className="create-account-link">
                Already have an account? 
                <a href="#" onClick={handleCreateAccount}>Login</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}