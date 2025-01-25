import React from 'react'
import login from "../assets/login.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import SubNavbar from '../components/SubNavbar';
import Footer from '../components/Footer';


const SignUp = () => {
  return (
    <>
    <SubNavbar/>
    <div className="flex min-h-screen items-center justify-center " style={{ backgroundImage: "url('/src/assets/aaabstract.webp')" }}>
            <div className=" max-w-7xl flex flex-col md:flex-row items-center bg-transparent rounded-lg shadow-lg overflow-hidden ml-30 mr-30">
              {/* Left Section: Image */}
              <div className="hidden md:block md:w-1/2 bg-transparent">
                <img src={login} alt="Illustration" className="w-full h-full object-cover bg-transparent" />
              </div>
      
              {/* Right Section: Login Form */}
              <div className="w-full md:w-1/2 p-6 md:p-10">
                <h1 className="text-5xl font-bold text-gray-800 text-center mb-10"><span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'>Sign up</span></h1>
                <form>
                  <div className="mb-4">
                    <label className="block text-md font-medium text-gray-300" htmlFor="username">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="mt-1 mb-3 w-full rounded-md border border-orange-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-md font-medium text-gray-300" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="mt-1 w-full rounded-md border border-orange-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="ml-2 text-sm text-gray-600" htmlFor="remember">
                      Remember me
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-orange-500 py-2 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Sign up
                  </button>
                </form>
                <div className="mt-4 text-center">
                  <a href="/testify2/login" className="text-sm text-blue-500 hover:underline">
                    Already have an account ?
                  </a>
                </div>
                <div className="mt-6">
                  <p className="text-sm text-gray-600 text-center">Or Signup with</p>
                  <div className="flex justify-center mt-2 space-x-3">
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700">
                    <FontAwesomeIcon icon={faTwitter} className="text-gray-100 text-2xl cursor-pointer" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400 text-white hover:bg-blue-500">
                     <FontAwesomeIcon icon={faFacebook} className="text-gray-100 text-3xl cursor-pointer" />
                    </button>
                    <button className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600">
                      <FontAwesomeIcon icon={faGoogle} className="text-gray-100 text-2xl cursor-pointer" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
    </>
          
        );
}

export default SignUp