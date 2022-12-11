import React, { useContext, useEffect } from 'react'
import PostCard from '../components/PostCard'
import { authContext } from '../lib/authContext'
import { useNavigate } from 'react-router-dom'
export default function Profile() {
  const navigate = useNavigate()
  const { auth } = useContext(authContext)
  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }
  }, [])
  return (
    <div className='py-14 container mx-auto max-w-5xl'>
      <div className='py-8 space-y-3'>
        <img
          className='w-28 h-28 mt-3 rounded-full'
          src={`https://avatars.dicebear.com/api/male/${auth?.name}.svg?background=%230000ff`}
          alt=''
        />
        <h2 className='text-3xl font-bold'>{auth?.name}</h2>
        <p className='text-xl font-medium text-gray-500'>@{auth?.username}</p>
        <p className='max-w-2xl text-lg'>{auth?.bio}</p>
      </div>
      <p className='text-2xl font-bold text-gray-700 mb-8'>My posts</p>
      <div className='space-y-8'>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  )
}
