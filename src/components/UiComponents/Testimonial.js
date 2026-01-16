import { Quote, Star } from 'lucide-react'
import React from 'react'

const Testimonial = ({ name, trip, description }) => {
    return (
        <div className="border-2 border-[#3fa72a] bg-[#252525] text-white h-66 w-60 sm:w-80 lg:w-100 px-3.25 pt-9 pb-3.25 rounded-md relative">
            <span className='absolute -top-5 left-1/2 -translate-x-1/2 rotate-180' style={{ overflowY: "visible" }}>  <Quote
                color="#ff6600"
                fill="#ff6600"
                className=" w-10 h-10 z-10"

            /></span>

            <div className=' flex flex-col justify-center items-center gap-y-2 '>
                <h1 className='text-center text-[14px] md:text-[16px] ' >{name}</h1>
                <h4 className='text-center text-[14px] md:text-[16px] ' >{trip}</h4>
                <p className='text-center text-[14px] md:text-[16px] ' >{description}</p>
                <div className='flex gap-x-1 mb-4' >
                    <Star color="#ede502" fill='#ede502' />
                    <Star color="#ede502" fill='#ede502' />
                    <Star color="#ede502" fill='#ede502' />
                    <Star color="#ede502" fill='#ede502' />
                    <Star color="#ede502" fill='#ede502' />
                </div>
            </div>
            
        </div>
    )
}

export default Testimonial