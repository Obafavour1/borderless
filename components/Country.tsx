import { Countries } from '@/constant/data'
import Image from 'next/image'
import React from 'react'

const Country = () => {
  return (
    <section className='sections bg-yellows-100/90'>
        <div className='flex items-center max-md:flex-col justify-between'>
            <div className=' md:w-1/2'>
                <p className='py-2  px-3  max-md:text-center rounded-xl text-yellows-200  bg-gradient-to-br from-yellows-100 to-blues-100 w-fit'>Supercharged for 127+ countries 🚀</p>
                <h3 className='header3 mt-5 max-md:w-4/5'>From Tokyo to Timbuktu, we&apos;ve got you <span className='text-reds-100'>covered</span></h3>
            </div>
            <div className='grid gap-12 grid-cols-4 mt-12'>
                {
                  Countries.map(country=>{
                    return(
                      <div key={country.name}>
                        <Image src={country.icon} alt='Sending Logo' width={80} height={60} />
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </section>
  )
}

export default Country