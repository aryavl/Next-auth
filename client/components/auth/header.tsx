import React from 'react'
import {Poppins} from 'next/font/google'
import { cn } from '@/lib/utils'

const font= Poppins({
    subsets:['latin'],
    weight:['600']
})
interface HeaderProps{
    label:string;
    headerTitle:string
}
const Header = ({label,headerTitle}:HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center border-blue-500'>
        <h1 className={cn("text-3xl font-semibold")}>{headerTitle}</h1>
        <p className='text-muted-foreground text-sm '>
            {label}
        </p>
    </div>
  )
}

export default Header