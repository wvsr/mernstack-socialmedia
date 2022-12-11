import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from '../lib/authContext'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const { auth, setAuth } = useContext(authContext)
  const logout = () => {
    localStorage.clear()
    setAuth(null)
    navigate('/login')
  }
  return (
    <header className='w-full top-0 fixed bg-white border-b border-gray-200 z-40'>
      <nav className='flex justify-around py-2.5'>
        <div className='logo font-bold text-3xl'>
          <Link to='/'>samibook</Link>
        </div>
        <nav className='space-x-10'>
          {auth && (
            <>
              <NavLink to='/setting' className='text-xl'>
                setting
              </NavLink>
              <NavLink to='/me' className='text-xl'>
                profile
              </NavLink>
              <button
                className='px-6 py-2 bg-red-500 rounded-md font-bold text-gray-200 text-xl'
                onClick={logout}
              >
                logout
              </button>
            </>
          )}
        </nav>
      </nav>
    </header>
  )
}
