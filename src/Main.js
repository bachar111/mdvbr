import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
// import PrivateRoute from './component/PrivateRoute/PrivateRoute'
// import Account from './Pages/Account'
import Error from './Pages/ErrorPage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import YourDevice from './Pages/YourDevice'
const MovieApp = () => {
  return (
    <div>
       
<Routes>
<Route path="/" element={<App />} />
{/* <Route path="/Account" element={
<PrivateRoute>
<Account />
</PrivateRoute>
} /> */}
<Route path="/*" element={<Error />} />
<Route path="/LoginPage" element={<LoginPage/>} />
<Route path="/SignUpPage" element={<SignUpPage/>} />
<Route path="/YourDevice" element={<YourDevice/>} />
</Routes>
    </div>
  )
}

export default MovieApp


