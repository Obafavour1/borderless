
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className=' sections  py-5 md:py-10 h-screen bg-gradient-to-r from-blues-500 to-blues-400'>
      <Navbar/>
      <div className='bg-headerbg bg-no-repeat bg-contain bg-center w-[342px] h-[342px]'>
        <div className='text-center pt-80 md:pt-60 text-white md:w-1/2 md:mx-auto'>
          <h2 className='header2'>Sending money <span>abroad</span>just got cooler!</h2>
          <p className='p1 my-[30px]'>Hey there world traveler! It's time for you globetrotters to rejoice cos' sending money abroad just got stupid simple</p>
          <button className='whiteButton w-fit mx-auto' type="button">Start sending</button>
        </div>
      </div>
    </header>
  )
}

export default Header