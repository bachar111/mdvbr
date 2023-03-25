import React from 'react';
import './Home.css';
function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Hello, how can we help you today?</h1>
      <p className="home-paragraph">Please login to your account first.</p>
      <a href='LoginPage'><button className="home-button"> Login</button> </a>
    </div>
  );
}


export default Home;