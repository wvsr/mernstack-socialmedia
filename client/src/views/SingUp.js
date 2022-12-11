import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../lib/authContext'

export default function SingUp() {
  const navigate = useNavigate()
  const { setAuth } = useContext(authContext)
  const initialForm = {
    name: '',
    userName: '',
    email: '',
    password: '',
  }
  const [formData, setFormData] = useState(initialForm)

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    try {
      const register = await axios.post('/user/register', {
        ...formData,
      })
      localStorage.setItem('user', JSON.stringify(register.data))
      setAuth(register.data)
      navigate('/')
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-zinc-50 px-3'>
      <div className='max-w-xl  rounded-2xl shadow-2xl px-4 md:px-8 py-10 bg-white border border-gray-100'>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='your full name'
            onChange={onChange}
            value={formData.name}
          />
          <input
            type='text'
            name='userName'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type username'
            onChange={onChange}
            value={formData.userName}
          />
          <input
            type='email'
            name='email'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type email'
            onChange={onChange}
            value={formData.email}
          />
          <input
            type='password'
            name='password'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your password'
            onChange={onChange}
            value={formData.password}
          />
          <button
            type='submit'
            className='w-full px-4 py-2 bg-primary rounded-md text-gray-200 font-medium text-xl hover:opacity-90'
          >
            Sing In
          </button>
        </form>
        <Link
          to='/login'
          className='block text-center w-full px-4 py-2 bg-slate-100 mt-5 text-gray-700 rounded-md font-medium text-xl hover:bg-slate-200'
        >
          Alredy have a acocount? Log In
        </Link>
      </div>
    </div>
  )
}
