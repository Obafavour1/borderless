'use client'
import { NavLinks } from '@/constant/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiMenu3Line } from 'react-icons/ri'

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <nav className='relative z-20 flex items-center justify-center w-full'>
        <div className='fixed z-30 w-11/12 md:w-9/12 top-5 shadow-2xl backdrop-blur-lg bg-white/80 rounded-2xl p-4'>
            <div className='flex  items-center justify-between'>
                <Link href='/'><Image src='/sendinglogo.svg' alt='Sending Logo' width={30} height={30} className='max-md:w-[25px] max-md:h-[25px]'/></Link>
                <div className='hidden lg:flex gap-x-10'>
                    {
                        NavLinks.map(nav=>{
                            return(
                                <div key={nav.name}>
                                    <Link href={nav.href} className='text-[18px] transition-all duration-300 text-blacks-100 w-fit font-semibold hover:text-blacks-200'>{nav.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex items-center gap-x-2'>
                    <button className='generalButton hidden lg:block rounded-xl border border-blacks-100transition-all duration-300  border-blacks-100 bg-white text-reds-100 hover:bg-reds-100 hover:text-white ' type="button">Login</button>
                    <button className='generalButton rounded-xl border border-blacks-200 text-white bg-blacks-200 transition-all duration-300 hover:bg-white hover:text-blacks-200 ' type="button">Join Borderless</button>
                    <div><RiMenu3Line onClick={()=>setOpen(!open)} className='lg:hidden cursor-pointer w-[30px] h-[30px] md:ml-3' /></div>
                </div>
            </div>
            <div  className='relative '>
                <div className={`${open ? 'visible' : 'invisible'}`}>
                    <div >
                        <div className={`${open ? 'grid  gap-x-10 scale-x-full rounded-lg bg-white shadow-2xl' : '  scale-x-0'} mt-5 w-1/2 right-5 md:right-[13%] lg:hidden transition-all duration-300  fixed   p-4 rounded-lg'`} >
                            {
                                NavLinks.map(nav=>{
                                    return(
                                        <div key={nav.name}>
                                            <Link href={nav.href} className='text-[18px] transition-all duration-300 text-blacks-100 w-fit font-semibold hover:text-blacks-200'>{nav.name}</Link>
                                        </div>
                                    )
                                })
                            }
                            <button className='generalButton w-full mt-4 rounded-xl transition-all duration-300 border border-blacks-100 bg-white text-reds-100 hover:bg-reds-100 hover:text-white' type="button">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar