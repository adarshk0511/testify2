import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Price from "./components/Price"
import Footer from './components/Footer'


export default function App() {
  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6" >
      <HeroSection/>
      <FeatureSection/>
      <Workflow/>
      <Price/>
      <Footer/>
    </div>
    
    </>
  )
}

