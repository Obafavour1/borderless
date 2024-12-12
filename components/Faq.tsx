import React from 'react'

const Faq = () => {
  return (
    <section className='sections'>
        <div>
            <div className=' text-center md:w-1/2 mx-auto'>
              <p className='py-2 px-3 max-md:text-center rounded-xl text-blues-300  bg-gradient-to-br from-blues-200 to-blues-100 w-fit mx-auto'>Frequently Asked questions</p>
              <h3 className='header3'>Got questions? We got answers!</h3>
              <p className='p1'>Feel free to reach out to us if you have more questions for us.</p>
              <button className='blackButton w-fit mx-auto' type="button">Contact us</button>
            </div>
            <div>
              <div>
                <h4>What is borderless</h4>
                <p>Join paywall pup and integrate seamlessly into your website.</p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Faq