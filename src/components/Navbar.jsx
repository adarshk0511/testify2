/* eslint-disable react/jsx-key */
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import React from 'react'
import logo from "../assets/logo.png"
import { navItems} from "../constants/index"
import { Link } from 'react-scroll'
const Navbar = () => {

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
                <ul className='hidden lg:flex ml-14 space-x-12'>
                    {navItems.map((items,index) =>(
                      <li key={index}>
                      <Link
                        to={items.to}
                        smooth={true}
                        duration={500}
                        offset={-70} // Adjust for the navbar height
                        className="cursor-pointer"
                      >
                        {items.label}
                      </Link>
                    </li>
                    ) )}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="/testify2/login" className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href="/testify2/signup" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an Account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && ( <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                <ul className=''>
                    {navItems.map((items,index) =>(
                      <li key={index} className='py-4'>
                        <a href={items.href}>{items.label}</a>
                      </li>
                    ) )}
                </ul>
                <div className='flex space-x-6'>
                    <a href="" className='py-2 px-3 border rounded-md'>Sign In</a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an Account
                    </a>
                </div>
            </div> )}
        </div>
    </nav>


  )
}

export default Navbar