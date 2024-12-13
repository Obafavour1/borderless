import Image from 'next/image'
import React from 'react'

const Banking = () => {
  return (
    <section className='px-5 md:px-[50px] xl:px-[150px] pt-6 md:pt-[100px] w-full bg-gradient-to-r from-[#5C43ED] to-[#7D4CDC]'>
        <div className='flex justify-between max-lg:flex-col'>
            <div className='grid gap-5 text-white text-center md:w-1/2 mx-auto'>
              <h3 className='header3'>The future of <span className='text-yellows-150'>personal</span> banking</h3>
              <p className='p11'>Go borderless on mobile! Download the app and signup to enjoy</p>
              <div className='flex w-fit mx-auto gap-5'>
                <Image src='/applestore.svg' alt='Sending Logo' width={197} height={57} className='max-md:w-[132px] max-md:h-[38px] cursor-pointer' />
                <Image src='/googleplay.svg' alt='Sending Logo' width={197} height={57} className='max-md:w-[132px] max-md:h-[38px] cursor-pointer' />
              </div>
              <p>Trusted by <span className='header4'>50+</span> customers</p>
              <Image src='/rating.svg' alt='Sending Logo' width={136} height={24} className='w-fit mx-auto'/>
            </div>
            <Image src='/phoneapp.svg' alt='Sending Logo' width={403} height={440} className='w-fit mx-auto'/>
        </div>
    </section>
  )
}

export default Banking