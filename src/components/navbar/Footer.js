import React from "react";
import Logo from "../assets/logo.png";
import { Mail, MapPin, Phone } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#2b2b2b] py-12 px-4">
      <div
        className="
        max-w-7xl mx-auto
        bg-white rounded-4xl
        px-6 sm:px-10 py-10
      "
      >
        <div
          className="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
        "
        >
          <div>
            <h4 className="font-semibold text-sm tracking-wider mb-4">
              ABOUT COMPANY
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                "About Us | Holidays 2 Cherish",
                "Refund Policy",
                "Privacy Policy",
                "Offers",
                "Contact Us",
                "Travelogue",
                "Booking Terms & Conditions",
                "Gallery",
                "Pay Online",
                "Feedback",
                "Sitemap",
              ].map((item, i) => (
                <li key={i} className="hover:text-[#3fa72a] hover:font-semibold cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm tracking-wider mb-4">
              TOURS BY CATEGORY
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              {["Beach", "Wildlife", "Adventure", "Honeymoon"].map(
                (item, i) => (
                  <li key={i} className="hover:text-[#3fa72a] hover:font-semibold cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>

            <h4 className="font-semibold text-sm tracking-wider mb-4">
              PACKAGES
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-[#3fa72a] hover:font-semibold">Domestic Packages</li>
              <li className="hover:text-[#3fa72a] hover:font-semibold">International Packages</li>
            </ul>
          </div>

          {/* CONNECT WITH US */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider mb-4">
              CONNECT WITH US
            </h4>

            <p className="text-sm text-gray-600 leading-relaxed mb-3 flex items-start  hover:text-[#3fa72a] cursor-pointer hover:font-bold">
             <MapPin className="w-4 h-4 mr-2 mt-1" /> 16/10164 Second Floor
              <br />
              Padam Singh Road, Karol Bagh
              <br />
              New Delhi, Delhi (India)
            </p>

            <p className="text-sm text-gray-600 mb-1 flex items-center hover:text-[#3fa72a] cursor-pointer hover:font-bold"><Phone className="w-4 h-4 mr-2" /> +91 9999859250</p>
            <p className="text-sm text-gray-600 mb-1 flex items-center hover:text-[#3fa72a] cursor-pointer hover:font-bold"><Phone  className="w-4 h-4 mr-2"/> +91 9999859250</p>
            <p className="text-sm text-gray-600 mb-4 flex items-center hover:text-[#3fa72a] cursor-pointer hover:font-bold">
              <Mail className="w-4 h-4 mr-2" /> info@holidays2cherish.com
            </p>

            <input
              type="email"
              placeholder="Enter Email"
              className="
                w-full border rounded-md
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2 focus:ring-green-500
              "
            />
            <button
              className="
                mt-3 w-full
                bg-[#45ad2f] text-white
                py-2 rounded-md text-sm
                hover:bg-green-600 transition
              "
            >
              Subscribe
            </button>
          </div>

          {/* POPULAR DESTINATIONS */}
          <div>
            <h4 className="font-semibold text-sm tracking-wider mb-4">
              POPULAR DESTINATIONS
            </h4>

            <div className="grid grid-cols-3 gap-2">
              {[
                {
                  name: "Dubai",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/2058/images/small/2058_1714723836.jpg",
                },
                {
                  name: "Bangkok",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/2062/images/small/2062_1714723913.jpg",
                },
                {
                  name: "Mauritius",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/2073/images/small/2073_1721041029.jpg",
                },
                {
                  name: "Maldives",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/2074/images/small/2074_1721112192.jpg",
                },
                {
                  name: "Cappadocia",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/2439/images/small/2439_1714724238.jpg",
                },
                {
                  name: "Mahe",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/3053/images/small/3053_1714724272.jpg",
                },
                {
                  name: "Bali",
                  image:
                    "https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/3063/images/small/3063_1721041090.jpg",
                },
              ].map((place, i) => (
                <div
                  key={i}
                  className="relative h-20 rounded-[10px] overflow-hidden cursor-pointer "
                >
                  {/* Image Placeholder */}
                  <img
                    src={place.image}
                    alt={place.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40" />

                  <span
                    className=" absolute inset-0 flex items-center justify-center text-xs font-semibold text-white z-10
      "
                  >
                    {place.name}
                  </span>
                </div>
              ))}
            </div>

            <div className=" mt-3 h-22.5 rounded-2xl   bg-gray-200  flex items-center justify-center  text-sm font-semibold text-white  relative overflow-hidden">
              <img className="absolute w-full h-full" src="https://www.holidays2cherish.com/public/upload/holidays2cherish/destinations/3064/images/small/3064_1714723797.jpg" />
              <span className="absolute inset-0 bg-black/40"></span>
              <span className="relative z-10">BAKU</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <div className="h-px w-100 bg-gray-400" />
        <span className="text-white text-sm font-semibold">
          <img src={Logo.src} alt="Logo footer" />
        </span>
        <div className="h-px w-100 bg-gray-400" />
      </div>
      
    </footer>
  );
};

export default Footer;
