import Link from 'next/link'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'

type Props = {
   data: string[]
   style?:string
   setState: Dispatch<SetStateAction<boolean>>
}

const Dropdown = ({data, style, setState}:Props) => {
     const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setState]);
  return (
    <div className={`absolute bg-white text-black top-10 z-50 p-10 rounded-xs ${style}`} ref={dropdownRef} >
        <div className='grid grid-cols-2 gap-x-4 gap-y-2' >
            {
                data.map((item,index)=>
                <Link className='hover:text-[#3fa72a]' onClick={()=>setState(false)} key={index} href={`/holidays/${item.toLowerCase()}`} >{item}</Link>
                )
            }
        </div>
    </div>
  )
}

export default Dropdown