'use client'
import React from 'react'
import { usePathname } from 'next/navigation';


export default function Footer() {

  const path = usePathname();

  if (path == '/login') {
    return null;
  }

  return (
    <div className="container w-full p-5 flex flex-col">
      N E X T - W E A T H E R
      <h2 className="text-xs font-light">@2023</h2>
      <h2 className="text-xs font-light">• all rights reserved</h2>

    </div>
  )
}
