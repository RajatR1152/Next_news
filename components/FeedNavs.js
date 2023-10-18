'use client'
import { Context } from '@/context/Context'
import React, { useContext } from 'react'

export default function FeedNavs() {

    const { setCount, count, setCategory, setLoading } = useContext(Context)

    return (
        <div id='feed' className="container w-full p-2 gap-8 my-5 mb-10 overflow-x-auto flex flex-row">
            <button href={'/'} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >#trending</button>
            <button href={'/'} onClick={() => { setCategory('science'); setCount(count + 1); setLoading(true) }} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >science</button>
            <button href={'/'} onClick={() => { setCategory('buisness'); setCount(count + 1); setLoading(true) }} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >buisness</button>
            <button href={'/'} onClick={() => { setCategory('sports'); setCount(count + 1); setLoading(true) }} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >sports</button>
            <button href={'/'} onClick={() => { setCategory('entertainment'); setCount(count + 1); setLoading(true) }} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >entertainment</button>
            <button href={'/'} onClick={() => { setCategory('technology'); setCount(count + 1); setLoading(true) }} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >technology</button>
            <button href={'/'} onClick={() => { setCategory('health'); setCount(count + 1); setLoading(true) }} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >health</button>
            <button href={'/'} className='text-lg transform bg-transparent transition duration-500 hover:scale-125 font-semibold text-white capitalize' >more..</button>
        </div>
    )
}
