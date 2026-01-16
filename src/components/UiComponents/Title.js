import React from 'react'

const Title = ({title}) => {
  return (
   <div className="flex flex-col justify-center items-center my-5 mx-4">
          <h1 className=" text-2xl md:text-3xl text-[#3a3a3a] font-bold whitespace-pre-line text-center">{title}</h1>
          <hr className="w-20 ptextb mt-4 h-0.75 mb-4 lg:mb-0" />
    </div>
  )
}

export default Title