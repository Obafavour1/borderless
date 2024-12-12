import { NavLinks } from '@/constant/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative'>
        <div className='absolute w-full md:w-1/2 mx-auto bg-white rounded-2xl p-4'>
            <div className='flex items-center justify-between'>
                <Image src='/sendinglogo.svg' alt='Sending Logo' width={30} height={30} />
                <div className='hidden lg:flex gap-x-10'>
                    {
                        NavLinks.map(nav=>{
                            return(
                                <div key={nav.name}>
                                    <Link href={nav.href} className='text-[18px] font-semibold'>{nav.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='flex gap-x-2'>
                    <button className='generalButton hidden md:block rounded-xl border border-blacks-100 text-reds-100' type="button">Login</button>
                    <button className='generalButton rounded-xl text-white bg-blacks-200' type="button">Join Borderless</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar