"use client";

import React from "react";
import Navbar from "../navbar/Navbar";
import HolidayPackageCard from "../UiComponents/HolidayPackageCard";
import { RotateCcw } from "lucide-react";
import FilterSection from "../UiComponents/FilterSection";
import Footer from "../navbar/Footer";
import BottomFooter from "../navbar/BottomFooter";

interface DestinationProps {
  destinationName: string;
}

const Destination = ({ destinationName }: DestinationProps) => {
  const Nights = [
    "3 Nights",
    "5 Nights",
    "7 Nights",
    "9 Nights",
    "10 Nights",
    "12 Nights",
  ];

  const Category = [
    "Adventure",
    "Family",
    "Hill Station",
    "Weekend",
    "Honeymoon",
    "Wildlife",
    "Group Tours",
    "Religious",
    "Heritage",
    "Culture",
    "Romantic",
    "Leisure",
    "Private",
  ];

  const Departure: string[] = [];

  const DestinationList = [
    "Shimla",
    "Manali",
    "Srinagar",
    "Kargil",
    "Leh",
    "Nubra",
    "Pangong",
    "Jispa",
    "Delhi",
    "Narkanda",
    "Sangla",
    "Chitkul",
    "Nako",
    "Kaza",
    "Chandratal",
    "Kalpa",
    "Sarahan",
    "Jibhi",
    "Dalhousie",
    "Amritsar",
    "Dharamshala",
  ];

  const Price = ["30001-35000"];

  const Plans = [
    {
      name: "Kinnaur Wonders with Manali",
      duration: "8 Days, 7 Nights",
      destinations: "Narkanda, Sangla, Kalpa, Sarahan, Jibhi, Manali",
    },
    {
      name: "Tribal Circuit with Chandertal Lake",
      duration: "10 Days, 9 Nights",
      destinations: "Narkanda, Sangla, Chitkul, Nako, Kaza, Chandertal, Manali",
    },
    {
      name: "Shimla Manali Luxury Tour Package",
      duration: "6 Days, 5 Nights",
      destinations: "Shimla, Kufri, Manali, Solang Valley, Kullu",
    },
    {
      name: "North India Escapades",
      duration: "13 Days, 12 Nights",
      destinations:
        "Srinagar, Kargil, Leh, Nubra, Pangong, Jispa, Manali, Delhi",
    },
    {
      name: "Manali Honeymoon Special",
      duration: "5 Days, 4 Nights",
      destinations: "Manali, Solang Valley, Rohtang Pass, Kullu",
    },
    {
      name: "Himachal Adventure Trail",
      duration: "9 Days, 8 Nights",
      destinations: "Manali, Kasol, Tosh, Kheerganga, Jibhi, Tirthan Valley",
    },
    {
      name: "Spiti Valley Road Trip",
      duration: "11 Days, 10 Nights",
      destinations: "Shimla, Kalpa, Kaza, Key Monastery, Chandertal, Manali",
    },
    {
      name: "Manali Family Holiday",
      duration: "7 Days, 6 Nights",
      destinations: "Manali, Solang Valley, Naggar, Kullu, Manikaran",
    },
    {
      name: "Leh Ladakh with Manali",
      duration: "12 Days, 11 Nights",
      destinations: "Manali, Jispa, Sarchu, Leh, Nubra Valley, Pangong Lake",
    },
    {
      name: "Best of Himachal Pradesh",
      duration: "10 Days, 9 Nights",
      destinations: "Shimla, Narkanda, Sangla, Kalpa, Manali, Dharamshala",
    },
  ];

  return (
    <div className="w-full overflow-hidden">
      <Navbar bgwhite={true} />

      {/* HERO SECTION */}
      <div className="relative h-[55vh] flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-black">
          <img
            src="https://www.holidays2cherish.com/public/images/search-result-listing.jpg"
            className="w-full h-full object-cover brightness-75"
            alt="Destination"
          />
        </div>

        <h1 className=" text-2xl sm1:text-4xl font-semibold text-white">
          Manali Tour Packages!
        </h1>

        <hr className="h-0.5 w-24 bg-white mt-5" />

        <p className="mt-10 text-white">Request Callback</p>

        <div className="absolute inset-x-0 bottom-0 h-10 bg-black/70" />

        <div className="absolute bottom-2 left-[15%] text-white">
          <span>Holidays</span>
          <span className="font-semibold">/{destinationName}</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="my-10">
        <div className="mx-auto max-w-350 px-5">
          <div className="flex gap-10 h-[calc(100vh-120px)]">
            {/* FILTER */}
            <aside className="hidden lg:block w-[20%] border-t-4 border-[#3fa72a] h-full">
              <div className="sticky top-0 h-fit max-h-[calc(100vh-100px)] overflow-y-auto shadow-2xl">
                <div className="p-5">
                  <p className="font-semibold">7 out of 7 packages</p>

                  <div className="flex justify-between items-center mt-2">
                    <span>Filter</span>
                    <span className="flex items-center gap-x-2 cursor-pointer">
                      <RotateCcw size={16} />
                      Reset
                    </span>
                  </div>

                  <hr className="my-3 h-0.5 bg-black" />

                  <FilterSection title="Number of Nights" data={Nights} />
                  <FilterSection title="Category" data={Category} />
                  <FilterSection title="Departure From" data={Departure} />
                  <FilterSection title="Destination" data={DestinationList} />
                  <FilterSection title="Price" data={Price} />
                </div>
              </div>
            </aside>

            {/* CARDS – SCROLLABLE */}
            <main className="w-full lg:w-[80%] h-full overflow-y-auto pr-2 no-scrollbar flex flex-col gap-7">
              {Plans.map((plan, index) => (
                <HolidayPackageCard
                  key={index}
                  name={plan.name}
                  duration={plan.duration}
                  destinations={plan.destinations}
                />
              ))}
            </main>
          </div>
        </div>
      </div>
      <Footer />
      <BottomFooter/>
    </div>
  );
};

export default Destination;
