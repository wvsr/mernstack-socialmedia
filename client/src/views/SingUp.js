import React from 'react'
import { Link } from 'react-router-dom'

export default function SingUp() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-zinc-50 px-3'>
      <div className='max-w-xl  rounded-2xl shadow-2xl px-4 md:px-8 py-10 bg-white border border-gray-100'>
        <form className='space-y-5'>
          <div className='flex gap-3'>
            <input
              type='text'
              className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
              placeholder='your full name'
            />
            <input
              type='text'
              className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
              placeholder='your full name'
            />
          </div>
          <input
            type='text'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type username'
          />
          <input
            type='password'
            className='w-full py-2.5 px-2 text-xl bg-slate-100 rounded-lg outline-none border border-gray-300 focus:border-blue-400'
            placeholder='type your password'
          />
          <button
            type='submit'
            className='w-full px-4 py-2 bg-primary rounded-md text-gray-200 font-medium text-xl hover:opacity-90'
          >
            Log In
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
