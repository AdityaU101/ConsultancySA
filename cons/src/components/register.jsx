
import React from 'react';
import './register.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = (
    { handleRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send registration request, for now, let's just log the credentials
    handleRegister(username, password);
  };
    return (
      <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
        <p>
          Already have an account?<Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default Register
