import { CarFront, Image, Utensils } from 'lucide-react'
import React from 'react'

interface HolidayPackageCardProps {
  name?: string;
  duration?: string;
  destinations?: string;
}

const HolidayPackageCard = ({ name, duration, destinations }: HolidayPackageCardProps) => {
  return (
    <div className='p-4 border shadow-[4px_4px_10px_rgba(0,0,0,0.15)]' >
         <div className='flex flex-col gap-y-7 md:gap-0 md:flex-row md:justify-between  ' >
          <div className='flex flex-col sm:flex-row gap-y-5 sm:gap-x-5' >
            <div className=''>
                 <img className=' w-full  sm:w-69.5 h-37.75 shadow-[6px_6px_20px_rgba(0,0,0,0.18)] ' src='https://www.holidays2cherish.com/public/images/noimageother.jpg' alt='Destination' />
            </div>
            <div>
                <h1 className='text-2xl font-bold text-[#444] '>{name}</h1>
                <div className='mt-5' >
                    <p className='font-semibold text-[#444] ' >{duration}</p>
                    <p><span className='font-semibold text-[#444] '>Destinations -</span> {destinations}</p>
                </div>
            </div>
          </div>
          <div className=' md:w-30 font-semibold text-[#444] ' >On Request</div>
         </div>
        <div className='flex  flex-col gap-y-4 sm:gap-0 sm:flex-row justify-between mt-4 sm:mt-10'>
          <div className='flex gap-2 sm1:gap-4' >
             <p className='flex flex-col items-center' ><Image/><span>Sightseeing</span></p>
             <p className='flex flex-col items-center' ><CarFront/><span>Transfer</span></p>
             <p className='flex flex-col items-center' ><Utensils /><span>Meal</span></p>
          </div>
          <div className='flex gap-4 items-center'>
            <button className=' px-2 py-1 text-white bg-[#3fa72a] rounded-[5px]' >View Details</button>
            <button className=' px-2 py-1 text-white bg-[#ff6600] rounded-[5px]' >Book Now</button>
          </div>
        </div> 
    </div>
  )
}

export default HolidayPackageCard