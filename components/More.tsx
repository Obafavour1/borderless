import Image from 'next/image'
import React from 'react'

const More = () => {
  return (
    <section className='sections bg-blues-500'>
        <div>
            <div>
                <p className='py-2 px-3 mx-auto max-md:text-center rounded-xl text-blues-20  bg-gradient-to-br from-blues-50 to-blues-100 w-fit'>Many more things</p>
                <h3 className='header3 text-white py-5'>Just <span className='text-yellows-150'>enough</span> to get you going everyday</h3>
            </div>
            <div className='grid gap-5 text-white'>
                <Image src='/passport.svg' alt='Sending Logo' width={335} height={281} />
                <div className='bg-blues-300 rounded-xl py-10 px-5'>
                    <h4 className='header4'>Business Transfer</h4>
                    <p className='p1 mt-2'>Boss Moves? We&apos;ve got your business transfers handled</p>
                </div>
                <Image src='/flight.svg' alt='Sending Logo' width={335} height={281} />
                <div className='bg-yellows-180 rounded-xl py-10 px-5'>
                    <h4 className='header4'>Personal Transfers</h4>
                    <p className='p1 mt-2'>Send Love, Send Support, Send Smiles!</p>
                </div>
                <Image src='/digital.svg' alt='Sending Logo' width={335} height={281} />
                <div className='bg-reds-100 rounded-xl py-10 px-5'>
                    <h4 className='header4'>Currency exchange</h4>
                    <p className='p1 mt-2'>Unlock the best exchange rates, and say hello to savings.</p>
                </div>
            </div>
            <button className='whiteButton mt-10 w-fit mx-auto' type="button">Start sending</button>
        </div>
    </section>
  )
}

export default More