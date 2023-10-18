'use client'
import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Context } from '@/context/Context';

export default function Header() {

    const path = usePathname();
    const { userData, setUserData, isLogedIn, setIsLogedIn } = useContext(Context);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("user"));
        let logedIn = JSON.parse(localStorage.getItem("isLogedIn"));
        setIsLogedIn(logedIn);
        setUserData(data);
    }, [])


    if (path == '/login') {
        return null;
    }


    return (
        <div className="container w-full p-2 items-center flex md:flex-row flex-col">

            <div className="container w-full md:w-fit flex md:p-0 py-3 flex-row">
                <h1 className="md:text-5xl text-3xl font-bold">N E W S</h1>
                {
                    isLogedIn ?
                        <button className='text-lg md:hidden flex flex-row gap-2 rounded-full ms-auto text-white px-5 py-3 bg-black font-semibold' > <img src={userData?.image} className='w-8 h-8 rounded-full' alt="" />log out</button>
                        :
                        <Link className='text-lg md:hidden ms-auto block text-white px-5 py-3 bg-black rounded-lg font-semibold' href={'/login'} >log in</Link>
                }
            </div>

            <div className="container overflow-x-auto w-full flex flex-row gap-5 md:w-fit ms-auto me-8 items-center justify-center">
                <Link className='text-lg font-semibold' href={'/'} >Home</Link>
                <Link className='text-lg font-semibold' href={'#feed'} >Trending</Link>
                <Link className='text-lg font-semibold' href={'#feed'} >Technology</Link>
                <Link className='text-lg font-semibold' href={'#feed'} >Buisness</Link>
                {
                    isLogedIn ?
                        <button className='text-lg hidden text-white px-5 py-3 rounded-full bg-black font-semibold md:flex flex-row gap-2' > <img src={userData?.image} className='w-8 h-8 rounded-full' alt="" /> log out</button>
                        :
                        <Link className='text-lg md:block hidden text-white px-5 py-3 bg-black rounded-lg font-semibold' href={'/login'} >log in</Link>
                }
            </div>
        </div>
    )
}
