import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Link from 'next/link'
import { BusFront, FileText, MapPin, ScrollText, Utensils } from 'lucide-react'
import Carousel from '../UiComponents/Carousel/Carausel'
import SingleCarousel from '../UiComponents/Carousel/SingleCarousel'
import PlanDetails from '../UiComponents/PlanDetails'
import ListSection from '../UiComponents/ListSection'
import PackagePolicy from '../Policy/PackagePolicy'
import SimilarPackageCard from '../UiComponents/CardComponent/SimilarPackageCard'
import Footer from '../navbar/Footer'
import BottomFooter from '../navbar/BottomFooter'

interface PackageDetails {
    packageName: string
}

const PackageDetails = ({ packageName }: PackageDetails) => {
   
     const tabs= [
    {
      id: "transfer",
      label: "Transfer",
      data: [
        {
          day: "Day 1",
          description: [
            "Airport to Hotel : Private Basis",
            "Hotel to Airport : Private Basis",
          ],
        },
        {
          day: "Day 2",
          description: [
            "Airport to Hotel : Private Basis",
            "Hotel to Airport : Private Basis",
          ],
        },
        {
          day: "Day 3",
          description: [
            "Airport to Hotel : Private Basis",
            "Hotel to Airport : Private Basis",
          ],
        },
        {
          day: "Day 4",
          description: [
            "Airport to Hotel : Private Basis",
            "Hotel to Airport : Private Basis",
          ],
        },
        {
          day: "Day 5",
          description: [
            "Airport to Hotel : Private Basis",
            "Hotel to Airport : Private Basis",
          ],
        },
      ],
    },
    {
      id: "meals",
      label: "Meals",
      data: [
        {
          day: "Day 03",
          description: [],
        },
      ],
    }
  ];
      const [activeTab, setActiveTab] = useState<string>("");
  const activeData = tabs.find(t => t.id === activeTab)?.data || [];

    const inclusions = [
        "Accommodation in hotel of your choice – Number of nights as per check-in/check-out dates.",
        "Meals plan – As opted by yourself.",
        "All transfers and activities as per the itinerary on sharing basis.",
        "Return transfers as provided by resort (Speedboat/Seaplane). Transfer details shared separately.",
        "Inclusive of green tax, hotel and luxury taxes.",
        "Assistance at the airport by hotel representative. Welcome drinks on arrival.",
        "Tea/Coffee making facilities (1 set per room per day).",
    ];

    const exclusions = [
        "All personal expenses like tips, laundry, telephone calls/fax, alcoholic beverages, etc.",
        "Anything not mentioned under package inclusions.",
        "Cost incidental to any change in itinerary/stay due to flight cancellation, bad weather, ill health, roadblocks, or factors beyond control.",
        "Airfare if not mentioned.",
        "Travel insurance (if not included in package).",
        "GST if not mentioned in the rates.",
        "If due to any contingency a hotel ends, similar/equivalent resort options will be shared.",
    ];

    const packages = [
        {
            id: 1,
            title: "Andaman",
            duration: "5 Days, 4 Nights",
            image: "https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/exotic-andaman_1694070495",
            destinations: "Port Blair, Havelock Island",
        },
        {
            id: 2,
            title: "Fascinating Andaman",
            duration: "5 Days, 4 Nights",
            image: "https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/exotic-andaman_1694070495",
            destinations: "Port Blair, Havelock Island",
            price: 15730,
        },
        {
            id: 3,
            title: "Andaman Delights",
            duration: "6 Days, 5 Nights",
            image: "https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/exotic-andaman_1694070495",
            destinations: "Port Blair, Havelock Island, Neil Island",
            price: 19580,
        },
    ];

     const handleScroll = (id: string) => {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
        setActiveTab("")
    };

    return (
        <div className='relative'>
            <Navbar bgwhite={true} />
            <div className="relative flex flex-col  overflow-hidden">
                <div className=" bg-[#e3e3e3] text-[#666] p-5">
                    <Link href="/" className=' hover:underline' >Home /</Link>
                    <span className="font-semibold capitalize text-black ml-4">{packageName}</span>
                </div>
            </div>
            <div className='w-full hidden md:flex flex-col  p-5 z-50 sticky top-0 bg-white shadow-sm'>
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
                <div className='flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto gap-x-10 '>
                    {/* left */}
                    <div className='relative md:w-[70%] gap-y-8 flex flex-col'>
                        <SingleCarousel>
                            <img className='w-full h-100 ' src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732" alt='s3bucket' />
                            <img className='w-full h-100 ' src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732" alt='s3bucket' />
                            <img className='w-full h-100 ' src="https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732" alt='s3bucket' />
                        </SingleCarousel>
                        <div className=' bg-white border p-5 shadow' >
                            <h1>Package Includes</h1>
                            <div className='flex gap-x-4 mt-3 text-[#666]'>
                                <button onClick={()=>setActiveTab("transfer")} className='flex flex-col items-center hover:border hover:rounded-b-full p-2' >
                                    <BusFront className={`${activeTab ==="transfer" && "text-[#3fa72a]"}`} />
                                    <span>Transfer</span>
                                </button>
                                <button onClick={()=>setActiveTab("meals")} className='flex flex-col items-center hover:border hover:rounded-b-full p-2' >
                                    <Utensils className={`${activeTab ==="meals" && "text-[#3fa72a]"}`} />
                                    <span>Meals</span>
                                </button>
                                <button onClick={() => handleScroll("Plan-Details")} className='flex flex-col items-center hover:border hover:rounded-b-full p-2' >
                                    <FileText />
                                    <span>Itinerary</span>
                                </button>
                                <button onClick={() => handleScroll("Package-Policy")} className='flex flex-col items-center hover:border hover:rounded-b-full p-2 ' >
                                    <ScrollText />
                                    <span>T&C</span>
                                </button>
                            </div>
                            <hr className='h-px bg-gray-100 mt-4' />
                        </div>
                        <div className={`overflow-x-auto ${!activeTab.length && "hidden"} `}>
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-gray-800 text-white text-left">
                                        <th className="p-1 w-32">Days</th>
                                        <th className="p-1">Description</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-gray-200">
                                    {activeData.length ? (
                                        activeData.map((item, index) => (
                                            <tr
                                                key={index}
                                                className="border-b border-white last:border-b-0"
                                            >
                                                <td className="p-1 font-medium text-xs">
                                                    {item.day}
                                                </td>
                                                <td className="p-1">
                                                    {item.description.length ? (
                                                        <ul className="space-y-px text-xs">
                                                            {item.description.map((d, i) => (
                                                                <li key={i}>{d}</li>
                                                            ))}
                                                        </ul>
                                                    ) : (
                                                        "-"
                                                    )}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={2} className="p-4 text-center text-gray-500">
                                                No data available
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
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
                        <div className='p-2 border-t bg-white shadow'>
                            <span className='font-semibold' >Price Includes: </span><span className='text-[#666]' >Airport Transfers, Self Driven Scooter</span>
                        </div>
                        <div id='Plan-Details' >
                            <PlanDetails day={1} title='Arrival at Port Blair' description='On arrival at Port Blair Airport by flight, you will be received and transferred to your hotel. In the afternoon start a tour of places in and around Port Blair - covering the Corbyn Cove Beach  & Cellular Jail. In the evening attend the enthralling Sound and Light Show at Cellular Jail, where the heroic saga of the Indian freedom struggle is brought alive. Overnight stay at Hotel.' />
                            <PlanDetails image='https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732' day={2} title='Arrival at Port Blair' description='On arrival at Port Blair Airport by flight, you will be received and transferred to your hotel. In the afternoon start a tour of places in and around Port Blair - covering the Corbyn Cove Beach  & Cellular Jail. In the evening attend the enthralling Sound and Light Show at Cellular Jail, where the heroic saga of the Indian freedom struggle is brought alive. Overnight stay at Hotel.' />
                            <PlanDetails image='https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732' day={11} title='Arrival at Port Blair' description='On arrival at Port Blair Airport by flight, you will be received and transferred to your hotel. In the afternoon start a tour of places in and around Port Blair - covering the Corbyn Cove Beach  & Cellular Jail. In the evening attend the enthralling Sound and Light Show at Cellular Jail, where the heroic saga of the Indian freedom struggle is brought alive. Overnight stay at Hotel.' />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <ListSection title="Inclusions" items={inclusions} />
                            <ListSection title="Exclusions" items={exclusions} />
                        </div>
                        <div id="Package-Policy"  >
                            <PackagePolicy />
                        </div>
                    </div>
                    {/* right */}
                    <div className=' mt-8 md:mt-0 md:w-[30%]'>
                        <aside className="bg-white shadow-sm  p-5 w-full">
                            <h3 className="text-lg font-semibold mb-6">
                                Similar Packages
                            </h3>

                            {packages.map(pkg => (
                                <SimilarPackageCard key={pkg.id} pkg={pkg} />
                            ))}
                        </aside>
                    </div>
                </div>
            </div>
            <Footer />
            <BottomFooter />
        </div>
    )
}

export default PackageDetails