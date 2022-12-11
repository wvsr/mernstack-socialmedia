import React, { useState } from 'react'
import axios from 'axios'
import { authContext } from './lib/authContext'
import { Route, Routes } from 'react-router-dom'

// components
import Header from './components/Header'
import Login from './views/Login'
import SingUp from './views/SingUp'
import Home from './views/Home'
import Me from './views/Me'
import Setting from './views/Setting'
import Profile from './views/Profile'
function App() {
  const user = JSON.parse(localStorage.getItem('user'))

  axios.defaults.baseURL = 'http://localhost:5000/api/'

  if (user?.token) {
    axios.defaults.headers.common['authorization'] = user.token
      ? 'Bearer ' + user.token
      : ''
  }
  const [auth, setAuth] = useState(user)
  return (
    <>
      <authContext.Provider value={{ auth, setAuth }}>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='SingUp' element={<SingUp />} />
          <Route path='me' element={<Me />} />
          <Route path='setting' element={<Setting />} />
          <Route path='user/:username' element={<Profile />} />
        </Routes>
      </authContext.Provider>
    </>
  )
}

export default App
