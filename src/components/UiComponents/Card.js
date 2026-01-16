import React from 'react'

const Card = ({image,name,index}) => {
  return (
    <div key={index} className='h-88.75 w-45 sm:w-60 overflow-hidden rounded-[15px] relative  hover:shadow-lg cursor-pointer'>
        <img src={image.src || image} className='w-full h-full absolute object-cover hover:scale-105 shadow-lg transform transition-transform duration-500' />
         <div className="
        absolute inset-x-0 bottom-0 h-1/2
        bg-linear-to-t from-black/70 to-transparent
        z-0
      " />
        <span className='relative text-center flex justify-center items-center text-white z-10 top-[90%] text-[14px] sm1:text-[16px] font-semibold'>{name}</span>
    </div>
  )
}

export default Card