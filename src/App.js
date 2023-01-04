import React from 'react';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
      <h1> WS Js Props</h1>
      <Profile FullName='bachar ben mamia'  Profession="Web developer" Age='20'> 
      <img src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80' alt='profile pic'/>

      </Profile>
    </div>
  );
}

export default App;
