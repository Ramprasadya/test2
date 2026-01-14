"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { ChevronDown, MailIcon, Menu, PhoneIcon } from "lucide-react";


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const Navigation = [
  {
    path: "/",
    name: "Home",
    icon: ""
  },
  {
    path: "/domestic",
    name: "Domestic",
    icon: <ChevronDown />,
  },
  {
    path: "/international",
    name: "International",
    icon: <ChevronDown />,
  },
  {
    path: "/visaassistance",
    name: "Visa Assistance",
    icon: "",
  },
  {
    path: "/payonline",
    name: "Pay Online",
    icon: "",
  },
  {
    path: "/aboutus",
    name: "About Us",
    icon: "",
  },
  {
    path: "/travelogue",
    name: "Travelogue ",
    icon: "",
  },
];


  return (
    <div className="flex flex-col w-full backdrop-blur-[5px] absolute z-20">
      <ul className=" hidden md:flex items-center justify-end divide-x-3 divide-white/90 mx-15 mt-2">
        <li className="px-4">
          <a
            className="hover:text-green-700 font-bold text-white cursor-pointer flex items-center"
            href="tel:+91 9999859250"
          >
            <PhoneIcon className="mr-2"/>+91 9999859250
          </a>
        </li>

        <li className="px-4">
          <a
            className="hover:text-green-700 font-bold text-white cursor-pointer flex items-center"
            href="mailto:info@holidays2cherish.com"
          >
            <MailIcon className="mr-2"/>info@holidays2cherish.com
          </a>
        </li>

        <li className="px-4">
          <Link
            className="hover:text-green-700 font-bold text-white cursor-pointer"
            href="/contact"
          >
            Contact Us
          </Link>
        </li>
      </ul>
       <ul className="bg-gray-800 flex md:hidden items-end p-1 justify-end" >
        <Link href="/contact" className="text-white" >Contact Us</Link>
       </ul>
      <div className=" mx-5 sm:mx-15 flex  justify-between items-center ">
        <img className="" src={Logo.src} alt="logo" />
        <ul className=" hidden md:flex  divide-x-3 divide-white/90">
          {Navigation.map((item, index) => (
            <Link
              className="hover:text-green-700 font-bold text-white px-4 flex items-center"
              href={item.path}
              key={index}
            >
              {item.name}
              {item.icon}
            </Link>
          ))}
        </ul>
        {/* Mobile Navigation */}
        <span onClick={()=>setOpen(true)}  className="md:hidden flex">
          <Menu />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
