import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://jittery-red-singlet.cyclic.app/api/auth/login', formData);
      const { token } = response.data;
      // Store token in local storage or state
      // Redirect to home page
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
