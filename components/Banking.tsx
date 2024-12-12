import Image from 'next/image'
import React from 'react'

const Banking = () => {
  return (
    <section>
        <div>
            <div>
                <h3>The future of <span>personal</span>banking</h3>
                <p>Go borderless on mobile! Download the app and signup to enjoy</p>
                <div>
                    <Image src='/' alt='Sending Logo' width={30} height={30} />
                    <Image src='/' alt='Sending Logo' width={30} height={30} />
                </div>
                <p>Trusted by <span>50+</span> customers</p>
                <Image src='/' alt='Sending Logo' width={30} height={30} />
            </div>
            <Image src='/' alt='Sending Logo' width={30} height={30} />
        </div>
    </section>
  )
}

export default Banking