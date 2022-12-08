import Header from './components/Header'
import Login from './views/Login'
import SingUp from './views/SingUp'
import Home from './views/Home'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Profile from './views/Profile'
import Setting from './views/Setting'
function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='SingUp' element={<SingUp />} />
        <Route path='me' element={<Profile />} />
        <Route path='setting' element={<Setting />} />
      </Routes>
    </div>
  )
}

export default App
