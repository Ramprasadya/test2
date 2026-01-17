"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { ChevronDown, MailIcon, Menu, PhoneIcon, X } from "lucide-react";


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

    // console.log(open)

    return (
        <>
        <div className={`flex flex-col w-full backdrop-blur-[5px] absolute z-50 ${open ? 'hidden':""}`}>
            <ul className=" hidden md:flex items-center justify-end divide-x-3 divide-white/90 mx-15 mt-2">
                <li className="px-4">
                    <a
                        className="hover:text-green-700 font-bold text-white cursor-pointer flex items-center"
                        href="tel:+91 9999859250"
                    >
                        <PhoneIcon className="mr-2" />+91 9999859250
                    </a>
                </li>

                <li className="px-4">
                    <a
                        className="hover:text-green-700 font-bold text-white cursor-pointer flex items-center"
                        href="mailto:info@holidays2cherish.com"
                    >
                        <MailIcon className="mr-2" />info@holidays2cherish.com
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
                <img className=" w-20 h-10 sm1:w-30 sm1:h-15" src={Logo.src} alt="logo" />
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
                <span onClick={() => setOpen(!open)} className="md:hidden flex bg-[#3fa72a] p-1 rounded-[2px] text-white">
                    <Menu />
                </span>
            </div>
            
        </div>
        {
            open&&(
                <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all z-30 ${open ? 'w-full' : 'w-0'}`} >
                <div className="flex flex-col text-black" >
                    <div onClick={() => setOpen(false)} className="flex items-center justify-end gap-2 p-3" >
                        <X className="h-5 w-5 rotate-90 mt-0.75" />
                    </div>
                    {
                        Navigation.map((item, index) =>
                            <Link key={index} onClick={() => setOpen(false)} className="py-2 pl-6 border-b flex justify-between" href={item.path} >{item.name} {item.icon}</Link>
                        )
                    }
                </div>
            </div>
            )
        }

        </>
    );
};

export default Navbar;
