"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { ChevronDown, MailIcon, Menu, PhoneIcon, X } from "lucide-react";
import Dropdown from "./Dropdown";
import MobileDropdown from "./MobileDropdown";

type Props = {
    bgwhite: boolean
}

const Navbar = ({ bgwhite = false }: Props) => {

    const [open, setOpen] = useState<boolean>(false)
    const [domesticDropdown, setDomesticDropdown] = useState<boolean>(false)
    const [internationalDropdown, setInternationalDropdown] = useState<boolean>(false)
    const [domesticDropdownMobile, setDomesticDropdownMobile] = useState<boolean>(false)
    const [internationalDropdownMobile, setInternationalDropdownMobile] = useState<boolean>(false)

    

    const toggleDomestic = () => {
        setDomesticDropdown((prev) => !prev);
        setInternationalDropdown(false);
    };

    const toggleInternational = () => {
        setInternationalDropdown((prev) => !prev);
        setDomesticDropdown(false);
    };
    const toggleDomesticMobile = () => {
        setDomesticDropdownMobile((prev) => !prev);
        setInternationalDropdownMobile(false);
    };

    const toggleInternationalMobile = () => {
        setInternationalDropdownMobile((prev) => !prev);
        setDomesticDropdownMobile(false);
    };

    

    const Navigation = [
        {
            path: "/",
            name: "Home",
            icon: ""
        },
        {
            path: "",
            name: "Domestic",
            icon: <ChevronDown />,
            onclick: toggleDomestic,
            rotate: `${domesticDropdown && "rotate-180"}`
        },
        {
            path: "",
            name: "International",
            icon: <ChevronDown />,
            onclick: toggleInternational,
            rotate: `${internationalDropdown && "rotate-180"}`
        },
        {
            path: "",
            name: "Visa Assistance",
            icon: "",
        },
        {
            path: "",
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

    const Domestic = [
        "Andaman and Nicobar Islands",
        "Himachal Pradesh",
        "Jammu and kashmir",
        "Kerala",
        "Ladakh",
        "Rajasthan",
        "Uttar Pradesh"
    ]

    const Internationl = [
        "Azerbaijan",
        "Egypt",
        "France",
        "Greece",
        "Hong Kong",
        "Iceland",
        "Indonesia",
        "Italy",
        "Malaysia",
        "Maldives",
        "Mauritius",
        "Netherlands",
        "New Zealand",
        "Seychelles",
        "Singapore",
        "Sri Lanka",
        "Switzerland",
        "Thailand",
        "Turkey",
        "United Arab Emirates",
    ]


    return (
        <>
            <div className={`flex flex-col w-full ${bgwhite ? "bg-white text-black shadow-md pb-3" : "backdrop-blur-[5px] absolute z-50 text-white"} ${open ? 'hidden' : ""}`}>
                <ul className={`hidden md:flex items-center justify-end divide-x-3 ${bgwhite ? "divide-black/90" : "divide-white/90"} lg:mx-15 mt-2`}>
                    <li className="px-4">
                        <a
                            className="hover:text-green-700 font-bold  cursor-pointer flex items-center"
                            href="tel:+91 9999859250"
                        >
                            <PhoneIcon className="mr-2" />+91 9999859250
                        </a>
                    </li>

                    <li className="px-4">
                        <a
                            className="hover:text-green-700 font-bold  cursor-pointer flex items-center"
                            href="mailto:info@holidays2cherish.com"
                        >
                            <MailIcon className="mr-2" />info@holidays2cherish.com
                        </a>
                    </li>
                    <Link href="/contactus" className="px-4 hover:text-green-700 font-bold  cursor-pointer flex items-center">
                        Contact Us
                    </Link>


                </ul>
                <ul className={`bg-gray-800 ${bgwhite ? "text-white" : "text-white"} flex md:hidden items-end p-1 justify-end`} >
                    <Link href="/contactus" className="" >Contact Us</Link>
                </ul>
                <div className=" mx-5 md:mx-1 lg:mx-15 flex  justify-between items-center ">
                    <Link href="/" ><img className=" w-20 h-10 sm1:w-30 sm1:h-15" src={Logo.src} alt="logo" /></Link>
                    <ul className={`hidden relative md:flex  divide-x-3 ${bgwhite ? "divide-black/90" : "divide-white/90"} `}>
                        {Navigation.map((item, index) => (
                            <Link
                                className="hover:text-green-700 font-bold px-2 lg:px-4 flex items-center"
                                href={item.path}
                                key={index}
                                onClick={item.onclick}
                            >
                                {item.name}
                                <span className={item.rotate} >{item.icon}</span>
                            </Link>
                        ))}
                        {domesticDropdown && <Dropdown data={Domestic} style="hidden md:block" setState={setDomesticDropdown} />}
                        {internationalDropdown && <Dropdown data={Internationl} style="left-30 hidden md:block" setState={setInternationalDropdown} />}
                    </ul>
                    {/* Mobile Navigation */}
                    <span onClick={() => setOpen(!open)} className="md:hidden flex bg-[#3fa72a] p-1 rounded-xs ">
                        <Menu />
                    </span>
                </div>

            </div>
            {open && (
                <div className="fixed inset-0 bg-white z-40 overflow-y-auto">
                    <div className="flex justify-end p-4">
                        <X onClick={() => setOpen(false)} />
                    </div>

                    <div className="flex flex-col">
                        <button
                            className="py-3 pl-6 border-b flex justify-between"
                            onClick={toggleDomesticMobile}
                        >
                            Domestic <ChevronDown className={domesticDropdownMobile ? "rotate-180" : ""} />
                        </button>

                        {domesticDropdownMobile && <MobileDropdown data={Domestic} open={domesticDropdownMobile} closeDropdown={() => setDomesticDropdownMobile(false)}
                            closeMenu={() => setOpen(false)} />}

                        <button
                            className="py-3 pl-6 border-b flex justify-between"
                            onClick={toggleInternationalMobile}
                        >
                            International{" "}
                            <ChevronDown className={internationalDropdownMobile ? "rotate-180" : ""} />
                        </button>

                        {internationalDropdownMobile && <MobileDropdown data={Internationl} open={internationalDropdownMobile} closeDropdown={() => setInternationalDropdownMobile(false)}
                            closeMenu={() => setOpen(false)} />}

                        <Link className="py-3 pl-6 border-b" href="" onClick={() => setOpen(false)} >
                            Visa Assistance
                        </Link>

                        <Link className="py-3 pl-6 border-b" href="" onClick={() => setOpen(false)} >
                            Pay Online
                        </Link>

                        <Link className="py-3 pl-6 border-b" href="/aboutus" onClick={() => setOpen(false)} >
                            About Us
                        </Link>
                        <Link className="py-3 pl-6 border-b" href="" onClick={() => setOpen(false)} >
                            Travelogue
                        </Link>
                    </div>
                </div>
            )}


        </>
    );
};

export default Navbar;
