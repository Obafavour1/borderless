import { Features } from '@/constant/data'
import Image from 'next/image'
import React, { lazy } from 'react'

const Feature = () => {
  return (
    <section  id='feature' className='sections'>
        <div >
            <div className=' text-center sm:w-9/12 lg:w-9/12 mx-auto'>
              <p className='py-2 px-3 mx-auto max-md:text-center rounded-xl text-greens-200  bg-gradient-to-br from-greens-100 to-blues-100 w-fit'>Packed with powerful features  🔥</p>
              <h3 className='header3 py-5'>A whole lot more than just sending <span className='text-greens-200'>money.</span>We&apos;re on steroids!</h3>
              <p className='p1'>Hey there world traveler! It&apos;s time for you globetrotters to rejoice cos&apos; sending money abroad just got stupid simple :)</p>
            </div>
            <div className='grid sm:grid-cols-2  md:grid-cols-3 bg-blueGradient gap-10 mt-20  '>
              {
                Features.map(feature=>{
                  return(
                    <div key={feature.title} className='bg-gradient-to-b from-blues-100 to-blues-400'>
                      <div className='ml-[2px] pl-4 bg-white h-full'>
                        <Image src={feature.icon} alt='Sending Logo' width={48} height={48} />
                        <h4 className='header4 py-4'>{feature.title}</h4>
                        <p className='p1'>{feature.description}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Feature