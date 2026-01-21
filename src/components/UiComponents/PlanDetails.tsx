import Image from 'next/image'
import React, { useState } from 'react'

type PlanDetailsProps = {
    image?: string
    title: string
    description?: string
    day: number
}

const PlanDetails = ({ image, title, description, day }: PlanDetailsProps) => {
    const [showFull, setShowFull] = useState(false);
    const WORD_LIMIT = 140;
    const shortDesc = description?.slice(0, WORD_LIMIT) + "..."

    return (
        <div className='mb-5'>
            <div>
                <h1 className='text-2xl text-[#666] font-semibold' >Day {day! <= 9 ? `0${day}` : day}</h1>
                <hr className='bg-[#3fa72a]  h-0.5 w-full' />
            </div>
            <div className='flex gap-x-4 mt-8  p-5  bg-white shadow-sm ' >
                {
                    image && (
                        <div className={` ${image?.length ? "flex w-[30%]" : "hidden"} `} >
                            <Image className='h-37.5' src={image!} height={150} width={1200} alt={title ? title : "Plan Details"} />
                        </div>
                    )
                }
                <div className={`${image ? "w-[70%]" : "w-full"} flex flex-col gap-y-4`} >
                    <h1 className='uppercase' >{title}</h1>
                    <p className='text-sm text-[#666] ' >{showFull ? description : shortDesc}</p>
                    <div className='w-full flex justify-end' >
                        <button onClick={() => setShowFull(prev => !prev)} className='btn-primary' >{showFull ? "Read Less" : "Read More"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanDetails