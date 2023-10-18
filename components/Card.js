import React from 'react'
import Link from 'next/link'
import Spinner from './Spinner'

export default function Card({ data, isLoading }) {
    return (
        <div style={{ backgroundImage: `url(https://cdn3.iconfinder.com/data/icons/eziconic-v1-0/256/02.png)` }} className="flex-none w-auto h-72 md:w-4/12 bg-cover bg-center text-white bg-gray-200 m-2 p-4 rounded-lg transform transition duration-500 hover:scale-110">
            {
                isLoading ?
                    <div className="w-full h-full bg-black/40 flex flex-col items-center justify-center">
                        <Spinner />
                    </div>
                    :
                    <>
                        <h2 className="text-md ms-auto text-gray-800 h-fit font-bold mb-2">{data.title}</h2>
                        <div className="container mt-8">
                            <Link href={data.url} className='p-3 text-blue-700 text-lg font-bold rounded-lg bg-black/40 my-auto'>read more..</Link>
                        </div>
                    </>
            }
        </div>
    )
}
