import React, { useEffect, useContext, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import PostCard from '../components/PostCard'
import Modal from 'react-modal'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { authContext } from '../lib/authContext'

export default function Home() {
  const navigate = useNavigate()
  const { auth, setAuth } = useContext(authContext)
  const [posts, setPosts] = useState([])
  console.log(posts)
  const fetchData = async () => {
    try {
      const posts = await axios.get('/post')
      // console.log(posts.data)
      setPosts(posts.data)
      console.log(posts.data)
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
    <div className='py-28 bg-slate-100 min-h-screen'>
      <main className='container max-w-6xl flex px-3 mx-auto relative'>
        <div className='w-8/12 space-y-6'>
          {posts.map((e) => (
            <PostCard {...e} />
          ))}
        </div>
        <aside className='w-4/12 mx-3'>
          <button className=' px-7 py-3 bg-primary text-white rounded-md mb-10 flex gap-5 items-center text-lg'>
            Create Post <FaPlus />
          </button>
          <div className='max-w-xs w-full bg-white shadow-lg px-4 py-4 rounded-lg items-center flex-col md:flex hidden'>
            <img
              className='w-24 h-24 mt-3 rounded-full'
              src='https://picsum.photos/500/300?random=4'
              alt=''
            />
            <p className='text-2xl text-center mt-4 mb-6'>Wasimul Sami</p>
            <Link
              to='/me'
              className='bg-slate-50 border-2 rounded-full border-gray-400 px-5 py-1 text-lg'
            >
              Profile Setting
            </Link>
          </div>
        </aside>
      </main>
    </div>
  )
}
