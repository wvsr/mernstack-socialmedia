import React from 'react'
import { FaLevelDownAlt, FaShare, FaComment } from 'react-icons/fa'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TfiComment } from 'react-icons/tfi'
import { RiShareCircleLine } from 'react-icons/ri'
import { BsThreeDots } from 'react-icons/bs'

export default function PostCard() {
  return (
    <div className='full max-w-2xl px-4 pt-3 pb-4 rounded-2xl shadow-md bg-white border border-gray-100'>
      <div>
        <div className='flex py-3 px-2 items-center gap-2'>
          <img
            className='w-10 h-10  rounded-full'
            src='https://picsum.photos/500/300?random=4'
            alt=''
          />
          <p className='text-lg flex-1'>Wasimul sami</p>
          <span className='text-2xl'>
            <BsThreeDots />
          </span>
        </div>
        <p className='text-2xl'>Hello my name is sami and i am a badass</p>
        <div className='mt-8 pb-1 px-2 text-2xl flex justify-between'>
          <div className='space-x-4'>
            <button className='text-3xl'>
              <AiOutlineHeart />
            </button>
            <button>
              <TfiComment />
            </button>
          </div>
          <div>
            <button>
              <RiShareCircleLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
