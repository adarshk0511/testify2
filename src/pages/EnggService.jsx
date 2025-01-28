import React,{useEffect} from 'react'
import { enggLink } from '../constants'
import SubNavbar from '../components/SubNavbar'
import Footer from '../components/Footer'

const EnggService = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
    <SubNavbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
         <div className='relative mt-5'>
      <div className="text-center">
        <span className='bg-neutral-900 text-orange-500 rounded-md h-6 text-lg font-medium px-2 py-1 uppercase'>
        Discover Our Services
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide '>
          Easily <span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>build</span>{" "}&{" "} <span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>manage</span> your projects
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20 '> 
         {enggLink.map((feature,index)=>(
            <div key={index} className='w-full sm:1/2 lg:w-1/3'>
              <div className='flex mb-10 '>
                <div className='flex mx-6 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                    {feature.icon}
                </div>
                <div >
                  <h5 className='mt-1 mb-1 text-xl lg:mb-6'>{feature.text}</h5>
                  <p className='text-md p-2 text-neutral-500 sm:mb-10'>{feature.description}</p>
                </div>
              </div>
            </div>
         ))}
      </div>
    </div>
    <Footer />
    </div>
    
  </>
  )
}

export default EnggService