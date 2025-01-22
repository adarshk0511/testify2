import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
  infoLinks,
} from "../constants";
import logo from "../assets/logo.png";
import { features } from "../constants/index";
import { PhoneCallIcon, MailsIcon, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 ">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="h-[200px]">
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-26" src={logo} alt="" srcset="" />
            <span className="text-5xl font-semibold "> Testify</span>
          </div>
          <div className="flex text-md mt-5 hidden sm:flex">
            {" "}
            Hastrix is a trusted partner in software testing, specializing in
            robust penetration testing and quality assurance services.
          </div>
        </div>
        <div className="lg:ml-8 sm:mt-4 h-[200px]">
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">Services</h3>
          <ul>
            {features.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.text}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:ml-9 mt-4 h-[200px]">
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">Information</h3>
          <ul>
            {infoLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-rows-2 lg:grid-rows-4 h-[330px]">
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">Get In Touch</h3>
            <div className="flex items-center flex-shrink-0 mt-3">
              <PhoneCallIcon />{" "} <span className="ml-2"> +91 98561 XXXXX</span>
            </div>
            <div className="flex items-center flex-shrink-0 mt-3">
              <MailsIcon /> <span className="ml-2">contact@testify.com</span> 
            </div>
          </div>
          <div className="mt-4 lg:mt-14">
          <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">Locate Us</h3>
          <div className="flex items-center flex-shrink-0 mt-3">
          <MapPin />{" "} <span className="ml-2"> BANGLORE</span>
            </div>
            <span>Crescent Prestige Shantiniketan,  ITPL Main Road, Krishnarajapuram, Bengaluru, Karnataka-560048</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
