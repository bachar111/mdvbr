import React from 'react'
import { Navigate } from 'react-router-dom';
import useLocalState from '../LocalStorage/useLocalState'

const PrivateRoute = ({children}) => {
    const [jwt , setJwt] = useLocalState("","jwt");

  return jwt ? children : <Navigate to="/Loginpage" />;

};

export default PrivateRoute
