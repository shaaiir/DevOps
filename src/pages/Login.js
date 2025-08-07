import React from 'react';
import './Auth.css';

function Login() {
  return (
    <div className="auth-container">
      <h2>Login to Kaizen Pay</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
}

export default Login;
