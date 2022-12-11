import React, { useContext, useEffect } from 'react'
import { authContext } from '../lib/authContext'
import { useNavigate } from 'react-router-dom'
export default function Setting() {
  const navigate = useNavigate()
  const { auth, setAuth } = useContext(authContext)
  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }
  }, [])
  return (
    <div className='container mx-auto max-w-5xl py-14'>
      <div className='space-y-8 mt-10'>
        <div className='space-y-2'>
          <label htmlFor='' className='text-xl'>
            name
          </label>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your email'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='' className='text-xl'>
            name
          </label>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your email'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='' className='text-xl'>
            name
          </label>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your email'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='' className='text-xl'>
            name
          </label>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your email'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='' className='text-xl'>
            name
          </label>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your email'
          />
        </div>
        <div className='space-y-2'>
          <label htmlFor='' className='text-xl'>
            name
          </label>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your email'
          />
        </div>

        <button
          type='submit'
          className='px-14 py-2 bg-primary rounded-md text-gray-200 font-medium text-xl hover:opacity-90'
        >
          Log In
        </button>
      </div>
    </div>
  )
}
