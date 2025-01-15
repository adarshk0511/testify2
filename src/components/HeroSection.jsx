import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20 pb-15' >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"> 
            Test your software with <span className='bg-gradient-to-r from-yellow-400 to-orange-700 text-transparent bg-clip-text  font-bold text-8xl animate-gradient-move' style={{
    backgroundSize: '200% 200%',
  }}>Testify</span> 
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>Empower your business with cutting-edge testing solutions tailored to secure your applications, networks, and devices. 
        Our comprehensive pentesting services help you stay ahead of threats and ensure robust security for your digital assets.</p>
        <div className='flex justify-center my-10'>
            <a href="" className='bg-gradient-to-r from-orange-400 to-orange-700 py-3 px-4 mx-3 rounded-md'>Get started</a>
        </div>
        {/* <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted  className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'> <source src={video1}  type='video/mp4'/></video>
            <video  autoPlay loop muted  className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4'> <source src={video2}  type='video/mp4'/></video>
        </div> */}
    </div>
  )
}

export default HeroSection