import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import './LoginCard.css';

const LoginCard = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('heree')
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     const { token } = data;
    //     const decodedToken = jwt.decode(token);

    //     // In a real application, you would likely store the token in a secure way
    //     console.log('Decoded Token:', decodedToken);
    //   } else {
    //     setError('Invalid credentials');
    //   }
    // } catch (error) {
    //   console.error('Error during login:', error);
    // }
  };

  return (
    <div className="login-card">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginCard;
