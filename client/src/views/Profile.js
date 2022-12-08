import React from 'react'
import PostCard from '../components/PostCard'

export default function Profile() {
  return (
    <div className='py-14 container mx-auto max-w-5xl'>
      <div className='py-8 space-y-3'>
        <img
          className='w-24 h-24 mt-3 rounded-full'
          src='https://picsum.photos/500/300?random=4'
          alt=''
        />
        <h2 className='text-3xl font-bold'>Wasimul Sami</h2>
        <p className='text-xl font-medium text-gray-500'>@Wasimulsami</p>
        <p className='max-w-2xl text-lg'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          sequi quas at omnis quo quis fugit aut velit? Blanditiis rerum fugiat
          fugit recusandae modi illum, fuga qui nobis molestiae cum.
        </p>
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
