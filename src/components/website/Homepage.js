"use client"
import React from "react"
import Navbar from "../navbar/Navbar.js"
import { SearchIcon } from "lucide-react"
import { WordRotate } from "../ui/word-rotate.js"

const Homepage = () => {
  const Word =["Thrills","Experiences","Adventures","Escapes"]
  return (
    <div className="relative w-full">
      <Navbar />

      <section className="relative w-full h-screen overflow-hidden">
        
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-screen
                       min-w-screen min-h-[56.25vw]
                       -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/ziKCB6sWAsE?autoplay=1&mute=1&controls=0&loop=1&playlist=ziKCB6sWAsE&playsinline=1"
            allow="autoplay; fullscreen"
          />
        </div>
        {/* <div className="absolute inset-0 bg-black/40 -z-10" /> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-normal">
            It's time for new
          </h1>
          <h1 className="">
            <WordRotate words={Word} className="text-3xl md:text-[80px] font-bold sm:text-5xl  mt-1"  />
          </h1>
          <div className="mt-6 w-full max-w-xl">
            <div className="flex items-center gap-2 border-2 border-green-700 bg-white rounded-md px-4 py-3 text-black">
              <input
                className="flex-1 outline-none"
                type="text"
                placeholder="Search Destinations, Tours, Activities"
              />
              <SearchIcon className="text-gray-600" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
