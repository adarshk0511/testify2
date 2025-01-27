import React,{useEffect} from 'react'
import { features } from '../constants'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SubNavbar from '../components/SubNavbar'
import Footer from '../components/Footer'


const TestService = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
  <>
    <SubNavbar />
    <div className="max-w-7xl max-h-5xl mx-auto pt-20 px-6">
         <div className='relative mt-5 min-h-[500px]'>
      <div className="text-center">
        <span className='bg-neutral-900 text-orange-500 rounded-md h-6 text-lg font-medium px-2 py-1 uppercase'>
        Discover Our Services
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide '>
          Easily <span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>test</span> your code
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20 '> 
         {features.map((feature,index)=>(
            <div key={index} className='w-full sm:1/2 lg:w-1/3'>
              <div className='flex'>
                <div className='flex mx-6 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full'>
                    {feature.icon}
                </div>
                <div >
                  <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                  <p className='text-md p-2 mb-20 text-neutral-500'>{feature.description}</p>
                </div>
              </div>
            </div>
         ))}
      </div>
    </div>
    <Footer />
    </div>
  </>
  );
};

export default TestService;