import React from 'react'
import Navbar from '../navbar/Navbar'
import Link from 'next/link'
import { BusFront, FileText, MapPin, ScrollText, Utensils } from 'lucide-react'
import Carousel from '../UiComponents/Carousel/Carausel'
import SingleCarousel from '../UiComponents/Carousel/SingleCarousel'

interface PackageDetails {
    packageName: string
}

const PackageDetails = ({ packageName }: PackageDetails) => {
    return (
        <div className='relative'>
            <Navbar bgwhite={true} />
            <div className="relative flex flex-col  overflow-hidden">
                <div className=" bg-[#e3e3e3] text- p-5">
                    <Link href="/" className='text-[#000] hover:underline' >Home /</Link>
                    <span className="font-semibold capitalize text-black ml-4">{packageName}</span>
                </div>
            </div>
            <div className='w-full flex flex-col  p-5 z-50 sticky top-0 bg-white shadow-sm'>
                <div className='flex justify-between items-center w-full max-w-7xl mx-auto '>
                    <div>
                        <h1 className='text-xl'>{packageName}</h1>
                        <p className='text-sm text-[#666] font-semibold flex items-center' >5 D | 4 N, <MapPin className='h-4 w-4' /> Port Blair, Havelock Island</p>
                    </div>

                    <div className='flex items-center gap-x-10'>
                        <div className='flex flex-col items-center'>
                            <p className='text-sm'>STARTING FROM</p>
                            <p className='font-bold'>On Request</p>
                        </div>

                        <button className='px-4 py-2 rounded-[5px] text-white btn-primary'>
                            Enquiry
                        </button>

                        <button className='px-4 py-2 rounded-[5px] text-white bg-[#ff6600]'>
                            Get Offer
                        </button>
                    </div>
                </div>
            </div>
            {/* Details */}
            <div className='w-full flex flex-col  p-5'>
                <div className='flex justify-between items-center w-full max-w-7xl mx-auto '>
                     {/* left */}
                     <div className='relative w-[70%] gap-y-10 flex flex-col'>
                        <SingleCarousel>
                            <img className='w-full h-100 ' src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732" alt='s3bucket' />
                            <img className='w-full h-100 ' src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732" alt='s3bucket' />
                            <img className='w-full h-100 ' src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732" alt='s3bucket' />
                        </SingleCarousel>
                        <div className=' bg-white border p-5 shadow' >
                             <h1>Package Includes</h1>
                             <div className='flex gap-x-4 mt-3 text-[#666]'>
                                <Link href="#" className='flex flex-col items-center hover:border hover:rounded-b-full p-2' >
                                    <BusFront />
                                    <span>Transfer</span>
                                </Link>
                                <Link href="#" className='flex flex-col items-center hover:border hover:rounded-b-full p-2' >
                                    <Utensils />
                                    <span>Meals</span>
                                </Link>
                                <Link href="#" className='flex flex-col items-center hover:border hover:rounded-b-full p-2' >
                                    <FileText/>
                                    <span>Itinerary</span>
                                </Link>
                                <Link href="#" className='flex flex-col items-center hover:border hover:rounded-b-full p-2 ' >
                                   <ScrollText />
                                    <span>T&C</span>
                                </Link>
                             </div>
                          <hr className='h-px bg-gray-100 mt-4' />
                        </div>
                        <div className='p-5 bg-white shadow-md text-[#666]'>
                            <p>The Andaman and Nicobar Islands are renowned for their pristine white-sand beaches and palm-fringed coastlines, as well as hosting exceptional underwater biodiversity with vibrant coral reefs and marine life.</p>
                            <p className='mt-5'>
                                This combination makes it a comprehensive and appealing destination for tourists.
                            </p>
                            <div className='justify-end flex'>
                            <button className='btn-primary '>Show more</button>
                            </div>
                        </div>
                     </div>
                     {/* right */}
                     <div className='w-[30%]'>

                     </div>
                </div>
            </div>
        </div>
    )
}

export default PackageDetails