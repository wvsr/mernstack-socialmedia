import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className='w-full top-0 fixed bg-white border-b border-gray-200 z-40'>
      <nav className='flex justify-around py-2.5'>
        <div className='logo font-bold text-3xl'>samibook</div>
        <NavLink
          to='/login'
          className='px-6 py-2 bg-primary rounded-md font-bold text-gray-200 text-xl'
        >
          login
        </NavLink>
      </nav>
    </header>
  )
}
