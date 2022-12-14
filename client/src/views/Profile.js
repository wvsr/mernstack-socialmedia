import React, { useContext, useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { authContext } from '../lib/authContext'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function Profile() {
  const { username } = useParams()
  const navigate = useNavigate()
  const { auth } = useContext(authContext)
  const [user, setUser] = useState({})
  const fetchData = async () => {
    try {
      const user = await axios.get(`user/profile/${username}`)
      setUser(user.data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }

    fetchData()
  }, [])
  return (
    <div className='py-14 container mx-auto max-w-5xl'>
      <div className='py-8 space-y-3'>
        <img
          className='w-28 h-28 mt-3 rounded-full'
          src={`https://avatars.dicebear.com/api/male/${user?.name}.svg?background=%230000ff`}
          alt=''
        />
        <h2 className='text-3xl font-bold'>{auth?.name}</h2>
        <p className='text-xl font-medium text-gray-500'>@{user?.userName}</p>
        <p className='max-w-2xl text-lg'>{user?.bio}</p>
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
