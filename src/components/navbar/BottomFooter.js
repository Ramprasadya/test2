import React from 'react'

const BottomFooter = () => {
  return (
      <div className="w-full bg-linear-to-r from-[#0b0b0b] via-[#111] to-[#0b0b0b] border-t border-gray-700">
      <div className="
        max-w-7xl mx-auto
        p-8
        flex flex-col md:flex-row
        items-center gap-x-7
        gap-2
        text-sm
      ">
        <p className="text-gray-300 text-center md:text-left">
          © 2026 <span className="font-semibold text-white">Holidays 2 Cherish</span>. All Rights Reserved.
        </p>
        <div className="text-gray-400 text-center md:text-right flex gap-x-2">
          <p className='font-semibold'>Powered by</p>
          <p className="text-[#2aa3ff] font-semibold cursor-pointer hover:underline">
            <span className='text-[#0b74c4]' >hello</span><span className='text-[#fb5a2d]' >GTX</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BottomFooter