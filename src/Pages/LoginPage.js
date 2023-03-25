import React from 'react';
import './LoginPage.css';
function SignIn() {
  return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
