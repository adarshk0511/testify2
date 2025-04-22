import React,{ useState, useEffect,useRef } from "react";

//Navbar & Footer
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

//Features Section
import { features, serviceLink } from "../constants";
import { Link, Route, Routes } from "react-router-dom";

//Workflow
import { checklistItems } from "../constants";
import hand from "../assets/hand.png";

//Aim Section
import dart from "../assets/dart.png";

//Price Section
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { motion } from "framer-motion";


const Landing = () => {
  //list glow
  const [glowIndex, setGlowIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIndex((prevIndex) => (prevIndex + 1) % checklistItems.length);
    }, 1000); // Change every second

    return () => clearInterval(interval);
  }, [checklistItems.length]);

  //price carosuel
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6" id="hero">
        {/* Hero section */}
        <div className="flex flex-col items-center mt-6 lg:mt-20 pb-15">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Build your dreams with{" "}
            <span
              className="bg-gradient-to-r from-yellow-400 to-orange-700 text-transparent bg-clip-text  font-bold text-8xl animate-gradient-move"
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Hastrix
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-400 max-w-4xl">
            At Hastrix, we specialize in delivering innovative solutions in
            Engineering Design, IT Services, Cybersecurity, and advanced AI/ML
            technologies. From Project Management and 3D Modeling to Supply
            Chain Support, we empower businesses across the oil and gas industry
            and beyond, serving both domestic and global markets with expertise
            and reliability.
          </p>
          <div className="flex justify-center my-10">
            {/* <a
              href=""
              className="bg-gradient-to-r from-orange-400 to-orange-700 py-3 px-4 mx-3 rounded-md"
            >
              Get started
            </a> */}
           <a
  href=""
  className="relative bg-gradient-to-r from-orange-400 to-orange-700 py-3 px-6 mx-3 rounded-md text-white font-semibold 
  shadow-lg transition-all duration-300 ease-in-out hover:scale-105 before:absolute before:inset-0 before:rounded-md 
  before:border-[3px] before:border-transparent before:animate-glow"
>
  Get started
</a>
          </div>
        </div>

        {/* Feature Section  */}
        <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] pb-10" id="services">
          <div className="text-center">
            <span className="bg-neutral-900 text-orange-500 rounded-md h-6 text-lg font-medium px-2 py-1 uppercase">
              Discover Our Services
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide ">
              Crafting{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
                services
              </span>{" "}
              that fits your needs
            </h2>
          </div>
          <div className="flex flex-wrap mt-10 lg:mt-20 ">
            {serviceLink.map((feature, index) => (
              <div key={index} className="w-full sm:1/2 lg:w-1/2 p-4">
                <Link
                  to={feature.href}
                  className="flex rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:border-orange-500 hover:ring-4 hover:ring-orange-500/80 hover:ring-offset-2 hover:ring-offset-neutral-900 hover:animate-glow "
                >
                  <div className="flex mt-5 mx-6 h-[200px] w-[200px] sm:h-[50px] sm:w-[150px] bg-neutral-900 text-orange-700 justify-center items-center rounded">
                    {feature.icon}
                  </div>
                  <div>
                    <h5 className="mt-4 mb-6 text-4xl bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text dancing-script-aim">
                      {feature.title}{" "}
                    </h5>
                    <p className="text-md p-2 mb-20 text-neutral-300">
                      {" "}
                      {feature.description.split("\n").map((line, index) => (
                        <p key={index}>{line.trim()}</p>
                      ))}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Workflow Section  */}
        <div className="mt-20 pb-10 border-b border-neutral-800 " id="workflow">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Why to{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
              choose
            </span>{" "}
            us
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
              <img src={hand} alt="" className="mt-10 hidden sm:block sm:h-[40%] lg:h-[80%] " />
            </div>
            {/* <div className="pt-12 w-full lg:w-1/2">
              {checklistItems.map((items, index) => (
                <div key={index} className="flex mb-12">
                  <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h5 className="mt-1 mb-2 text-xl">{items.title}</h5>
                    <p className="text-md text-neutral-500">
                      {items.description}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="pt-12 w-full lg:w-1/2">
      {checklistItems.map((items, index) => (
        <div key={index} className="flex mb-12">
          <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
            <CheckCircle2 />
          </div>
          <div>
          <h5
  className={`mt-1 mb-2 text-xl transition-all duration-500 ${
    index === glowIndex ? "text-orange-400 animate-glowText" : ""
  }`}
>
  {items.title}
</h5>
            <p className="text-md text-neutral-500">{items.description}</p>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>

        {/* Aim Section */}
        <div className="mt-20 border-b border-neutral-800" id="vision">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
              vision
            </span>{" "}
            we work on
          </h2>
          <div className="flex flex-wrap justify-center">
            <div className="flex-col justify-center items-center p-2 mt-32 w-full lg:w-1/2">
              <p className="text-xl p-2 mb-10 text-neutral-500">
                Our{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text dancing-script-aim text-4xl">
                  goal
                </span>{" "}
                 is to become a global leader in providing cutting-edge
                engineering solutions, AI/ML technologies, cybersecurity, and IT
                services.
              </p>
              <p className="text-xl p-2 text-neutral-500">
                By harnessing the power of{" "}
                <span className=" bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text dancing-script-aim text-4xl">
                  innovation
                </span>{" "}
                and delivering reliable, secure solutions, we empower businesses
                to thrive in an ever-evolving digital landscape, driving
                efficiency, growth, and resilience.
              </p>
            </div>
            <div className="flex justify-center items-center p-2 w-full lg:w-1/2">
              <img src={dart} alt="" className="h-[80%] hidden sm:block filter brightness-75" />
            </div>
          </div>
        </div>

        {/* Price Section */}
        <div className="mt-20" id="pricing">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
            Pricing
          </h2>
          {/* <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <div className={`p-10 border border-neutral-700 rounded-xl ${option.title == 'Pro' ? "animate-glow-infinite" : "hover:animate-glow" }`}>
                  <p className="text-4xl mb-8">
                    {option.title}
                    {option.title === "Pro" && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-4">
                        (Most Popular)
                      </span>
                    )}
                  </p>
                  <p className="mb-8">
                    <span className="text-5xl mt-6 mr-2">{option.price}</span>
                    <span className="text-neutral-400 tracking-tight">
                      /Month
                    </span>
                  </p>
                  <ul>
                    {option.features.map((feature, index) => (
                      <li key={index} className="mt-8 flex items-center">
                        <CheckCircle2 />
                        <span className="ml-2 text-neutral-500">
                          {feature}{" "}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href=""
                    className="inline-flex justify-center items-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-gradient-to-r from-orange-500 to-orange-900 border border-orange-400 rounded-lg transition duration-200  hover:animate-glow"
                  >
                    Join in
                  </a>
                </div>
              </div>
            ))}
          </div> */}
          
          
          <div>
      {/* 🖥️ Desktop View */}
      <div className="hidden lg:block">
        <div className="flex flex-wrap">
          {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className={`p-10 border border-neutral-700 rounded-xl ${
                option.title === "Pro" ? "animate-glow-infinite" : "hover:animate-glow"
              }`}>
                <p className="text-4xl mb-8">{option.title}</p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">/Month</span>
                </p>
                <ul>
                  {option.features.map((feature, i) => (
                    <li key={i} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2 text-neutral-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="" className="block mt-4 p-3 text-center bg-orange-500 rounded-lg text-white hover:animate-glow">
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📱 Mobile Carousel (Auto-scroll & Swipeable) */}
      <div className="lg:hidden overflow-hidden w-full">
        <motion.div 
          ref={carouselRef} 
          className="flex space-x-4 flex-nowrap"
          drag="x"
          dragConstraints={{ right: width, left: 0 }}
          animate={{ x: [-width, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {pricingOptions.concat(pricingOptions).map((option, index) => (
            <motion.div 
              key={index} 
              className={`min-w-[90%] mt-5 mb-4 p-6 border border-neutral-700 rounded-xl shadow-lg ${
                option.title === "Pro" ? "animate-glow-infinite" : "hover:animate-glow"
              }`}
              whileHover={{ scale: 1.05 }} // Slight pop effect on hover
            >
              <p className="text-4xl mb-4">{option.title}</p>
              <p className="mb-4 text-5xl">{option.price} <span className="text-neutral-400 text-lg">/Month</span></p>
              <ul>
                {option.features.map((feature, i) => (
                  <li key={i} className="mt-2 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2 text-neutral-500">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="" className="block mt-4 p-3 text-center bg-orange-500 rounded-lg text-white hover:animate-glow">
                Join Now
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>


        </div>
        <div className="max-w-7xl mx-auto pt-20 px-6" >
        <Footer />
        </div >
        
      </div>
    </>
  );
};

export default Landing;
