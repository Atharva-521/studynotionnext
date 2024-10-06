"use client"

import Link from 'next/link'
import React from 'react'

export const Button = ({children, linkto, active} : {children: React.ReactNode, linkto: string, active: boolean}) => {
  return (
    <Link href={linkto}>
        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-bold 
            ${active ? "bg-yellow-50 text-black" : " bg-richblack-800"}
            hover:scale-95 transition-all duration-200 border-b-2 border-r-2 border-richblack-500`}>
            {children}
        </div>
    </Link>
  )
}
