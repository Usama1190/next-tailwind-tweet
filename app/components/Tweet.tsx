import Link from 'next/link';
import React from 'react';
import { GoKebabHorizontal } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsUpload } from "react-icons/bs";
import { FiBarChart2 } from "react-icons/fi";


const Tweet = () => {
  return (
    <div className='max-w-xl flex my-24 mx-auto p-3 border bg-white'>
      <img
      className='h-12 w-12 rounded-full mr-3' 
      src="/Usama.png" 
      alt="Usama Israr Profile Image" 
      />

        <div className='w-full'>
            <div className='flex'>
                <div className='flex'>
                    <Link href={'https://twitter.com'}>
                        <strong className='text-gray-800 mr-1'>Usama Israr</strong>
                        <span className='text-gray-500 mr-1'>@heyusama1</span>
                    </Link>

                    <span className='text-gray-500 mr-1'>&middot;</span>
                    <span className='text-gray-500'>Mar 18</span>
                </div>
                <div className='ml-auto'>
                    <GoKebabHorizontal />
                </div>
            </div>

            <div>You are amazing if you take time to comment on a tweet or YouTube
                video or a blogpost that has helps you. 🙌
            </div>

            <div className='flex justify-between mt-2'>
                <div className='flex items-center'>
                    <FaRegComment className='mr-2 text-gray-600' />
                    <span className=' text-gray-600'>20</span>
                </div>

                <div className='flex items-center'>
                    <FaRetweet className='mr-2 text-gray-600' />
                    <span className=' text-gray-600'>17</span>
                </div>

                <div className='flex items-center'>
                    <AiOutlineHeart className='mr-2 text-gray-600' />
                    <span className=' text-gray-600'>215</span>
                </div>

                <div className='flex items-center'>
                    <BsUpload className='mr-2 text-gray-600' />
                </div>

                <div className='flex items-center'>
                    <FiBarChart2 className='mr-2 text-gray-600' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tweet
