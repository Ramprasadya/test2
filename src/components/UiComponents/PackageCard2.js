"use client"
import { MapPin } from "lucide-react"
import React from "react"

const PackageCard2 = ({ image, title, duration }) => {
  return (
    <div className="border border-[#e5e5e5] min-h-103.25 w-55.75 rounded-2xl overflow-hidden flex flex-col bg-white">
      
      <div className="relative h-75 overflow-hidden">
        <img
          src={image?.src || image}
          alt={title}
          className="w-full h-full object-cover scale-100 hover:scale-105 shadow-lg transform transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-2 right-0 flex justify-start items-center text-white z-10 text-[16px] font-semibold gap-1">
          <MapPin size={18} />
          {duration}
        </div>
      </div>

      <div className="px-4 py-3 flex flex-col gap-2 flex-1">
        <h1 className="text-[16px] font-bold text-[#3a3a3a] line-clamp-2">
          {title}
        </h1>

        <button className="mt-auto px-3 py-1 rounded-[5px] ptextb text-white w-full cursor-pointer">
          View Trip
        </button>
      </div>
    </div>
  )
}

export default PackageCard2
