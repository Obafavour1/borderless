import { Features } from '@/constant/data'
import Image from 'next/image'
import React from 'react'

const Feature = () => {
  return (
    <section className='sections'>
        <div>
            <div className=' text-center md:w-1/2 mx-auto'>
                <p className='py-2 px-3 mx-auto max-md:text-center rounded-xl text-greens-200  bg-gradient-to-br from-greens-100 to-blues-100 w-fit'>Packed with powerful features</p>
                <h3 className='header3 py-5'>A whole lot more than just sendig <span className='text-greens-200'>money.</span>We're on steroids!</h3>
                <p className='p1'>Hey there world traveler! It’s time for you globetrotters to rejoice cos’ sending money abroad just got stupid simple :)</p>
            </div>
            <div className='grid md:grid-cols-3 gap-10 mt-20'>
              {
                Features.map(feature=>{
                  return(
                    <div key={feature.title}>
                      <Image src={feature.icon} alt='Sending Logo' width={48} height={48} />
                      <h4 className='header4 py-4'>{feature.title}</h4>
                      <p className='p1'>{feature.description}</p>
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