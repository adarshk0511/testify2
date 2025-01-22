import React from "react";
import { features, serviceLink } from "../constants";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Route, Routes } from "react-router-dom";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] pb-10">
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
            <Link to={feature.href} className="flex rounded-lg border border-neutral-700  shadow-lg hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300 ease-in-out hover:border-orange-500 hover:ring-4 hover:ring-orange-500/80 hover:ring-offset-2 hover:ring-offset-neutral-900">
              <div className="flex mt-5 mx-6 h-[200px] w-[200px] sm:h-[50px] sm:w-[150px] bg-neutral-900 text-orange-700 justify-center items-center rounded">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-4 mb-6 text-2xl underline decoration-orange-700 decoration-2">{feature.title} </h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {" "}
                  {feature.description.split("\n").map((line, index) => (
                    <p key={index}>{line.trim()}</p>
                  ))}
                </p>
              </div>
            </Link>

            {/* ///////////////////////////////////////////////////////// */}
            {/* <Link
              to={feature.href}
              className="block p-6 bg-neutral-900 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="flex mx-6 h-10 w-10 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div className="ml-4">
                  <h5 className="text-xl font-semibold">{feature.title}</h5>
                  <p className="text-md text-neutral-500">
                    {feature.description.split("\n").map((line, index) => (
                      <p key={index}>{line.trim()}</p>
                    ))}
                  </p>
                </div>
              </div>
            </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
};

// mt-4 mb-6 text-2xl underline decoration-orange-700 decoration-2
export default FeatureSection;
