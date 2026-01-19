"use client"
import React from 'react'

type PackageCardProps = {
  image: string;
  title: string;
  address: string;
  price: number | string;
};

const PackageCard = ({image, title, address, price}:PackageCardProps) => {
    
  return (
    <div className='border border-[#e5e5e5] overflow-hidden h-100 sm1:h-106.25 mb-7.5 w-55.75 sm:w-72.5 rounded-2xl flex flex-col' >
       <img  className='h-60 w-full object-cover' src={image} alt={address} />
       <div className='px-4 py-2 mb-2 flex flex-col gap-y-1' >
          <div className=''>
            <h1 className='tetx-[16px] font-bold text-[#3a3a3a]'>{title}</h1>
            <hr className="w-10 ptextb mt-2 h-0.75 mb-4 lg:mb-0" />
          </div>
          <p className='text-[16px] hover:text-[#3fa72a]'>{address}</p>
          <div className='flex flex-row items-center justify-between mb-2'>
             <a className='hover:text-[#3fa72a] text-[#3a3a3a] text-[12px] sm:1text-[14px] md:text-[16px]'>Starting from</a>
             <a className='hover:text-[#3fa72a] text-[#3a3a3a] text-[12px] sm:1text-[14px] md:text-[16px]'><span className='font-semibold'>INR </span>{price}</a>
          </div>
          <button className='px-3 py-1 rounded-xs  ptextb text-white w-full cursor-pointer'>View Trip</button>
       </div> 
    </div> 
  )
}

export default PackageCard