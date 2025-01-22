import React from "react";
import dart from "../assets/dart.png";

const AimSection = () => {
  return (
    <div className="mt-20 border-b border-neutral-800">
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
            Our <span className="underline decoration-orange-700 decoration-2">goal</span> is to become a global leader in providing cutting-edge
            engineering solutions, AI/ML technologies, cybersecurity, and IT
            services. 
          </p>
          <p className="text-xl p-2 text-neutral-500">
            By harnessing the power of <span className="underline decoration-orange-700 decoration-2">innovation</span> and delivering
            reliable, secure solutions, we empower businesses to thrive in an
            ever-evolving digital landscape, driving efficiency, growth, and
            resilience.
          </p>
        </div>
        <div className="flex justify-center items-center p-2 w-full lg:w-1/2">
          <img src={dart} alt="" className="h-[80%] filter brightness-75" />
        </div>
      </div>
    </div>
  );
};

export default AimSection;
