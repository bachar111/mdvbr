import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'; 

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-title">Oops!</h1>
        <p className="error-message">Something went wrong. Please try again later.</p>
        <Link to="/" className="error-link">Return to Home Page</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
