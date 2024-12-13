
import Image from 'next/image'
const Header = () => {
  return (
    <header className=' sections  py-5 md:py-10 h-screen bg-gradient-to-r from-blues-500 to-blues-400'>
      <div className='md:bg-headerbg max-md:pt-24 lg:mt-10 h-full bg-no-repeat bg-contain bg-center '>
        <Image src='/sendheaderbg.svg' alt='Globe' width={342} height={342} className='md:hidden sm-w-1/2 mx-auto'/>
        <div className='text-center sm:px-10 mt-5 md:pt-64 text-white md:w-[63%] md:mx-auto'>
          <h2 className='header2 '>Sending money <span className='text-yellows-150'>abroad</span> just got cooler!</h2>
          <p className='p1 my-[30px] md:my-5 '>Hey there world traveler! It&apos;s time for you globetrotters to rejoice cos&apos; sending money abroad just got stupid simple</p>
          <button className='whiteButton w-fit mx-auto' type="button">Start sending</button>
        </div>
      </div>
    </header>
  )
}

export default Header