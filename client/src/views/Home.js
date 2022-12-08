import React from 'react'
import { FaPlus } from 'react-icons/fa'
import PostCard from '../components/PostCard'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='py-28 bg-slate-100 min-h-screen'>
      <main className='container max-w-6xl flex px-3 mx-auto relative'>
        <div className='w-8/12 space-y-6'>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <aside className='w-4/12 mx-3'>
          <button className=' px-7 py-2'>Create Post</button>
          <div className='max-w-xs w-full bg-white shadow-lg px-4 py-4 rounded-lg flex items-center flex-col'>
            <img
              className='w-24 h-24 mt-3 rounded-full'
              src='https://picsum.photos/500/300?random=4'
              alt=''
            />
            <p className='text-2xl text-center mt-4 mb-6'>Wasimul Sami</p>
            <Link className='bg-slate-50 border-2 rounded-full border-gray-400 px-5 py-1 text-lg'>
              Profile Setting
            </Link>
          </div>
        </aside>
      </main>
    </div>
  )
}
