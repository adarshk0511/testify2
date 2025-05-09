/* eslint-disable react/jsx-key */
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import logo from "../assets/logo.png"
import { navItems} from "../constants/index"
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
const SubNavbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-13 w-14 mr-2 ' src={logo} alt="" />
                    
                    <span className="text-4xl tracking-tight font-semibold">
                        Hastrix
                    </span>
                </div>
                <RouterLink to="/" className='hidden lg:flex ml-14 space-x-12'>
                    Home
                </RouterLink>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <RouterLink to="/login" className='py-2 px-3 border rounded-md'>
                        Sign In
                    </RouterLink>
                    <RouterLink to="/signup" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an Account
                    </RouterLink>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && ( <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <Link to="/" className='mt-1 mb-3'>
                    Home
                </Link>
                <div className='flex space-x-6'>
                    <RouterLink to="/login" className='py-2 px-3 border rounded-md'>Sign In</RouterLink>
                    <RouterLink to="/signup" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an Account
                    </RouterLink>
                </div>
            </div> )}
        </div>
    </nav>


  )
}

export default SubNavbar;