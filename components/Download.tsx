import Image from 'next/image'
import React from 'react'

const Download = () => {
  return (
    <section className='sections bg-blues-100'>
        <div className='flex w-full max-md:flex-col-reverse md:justify-between'>
          <div>
            <Image src='/phone.svg' alt='Sending Logo' width={403} height={840} className='max-md:w-[236px] max-md:h-[492px] mx-auto' />
          </div>
          <div className='grid md:mt-[140px] w-full  md:gap-y-5 h-[401px]  text-center md:text-left items-center sm:w-9/12 sm:mx-auto md:w-1/2'>
            <p className='py-2 px-3 max-md:text-center rounded-xl text-blues-300  bg-gradient-to-br from-blues-200 to-blues-100 w-fit mx-auto'>Start sending money 💸</p>
            <h3 className='header3 text-blacks-200'>Just <span className='text-blues-300'>download our app</span> and start sending money in three minutes tops</h3>
            <p className='p2'>Hey there world traveler! It’s time for you globetrotters to rejoice cos’ sending money abroad just got stupid simple :)</p>
            <button className='blackButton mx-auto' type="button">See how</button>
          </div>
        </div>
    </section>
  )
}

export default Download