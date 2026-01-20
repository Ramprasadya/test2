"use client";

import React, { useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import HolidayPackageCard from "../UiComponents/CardComponent/HolidayPackageCard";
import { RotateCcw } from "lucide-react";
import FilterSection from "../UiComponents/FilterSection";
import Footer from "../navbar/Footer";
import BottomFooter from "../navbar/BottomFooter";
import Modal from "../UiComponents/Modal";
import EnquiryForm from "../UiComponents/EnquiryForm";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import DatePicker from "react-datepicker";
import ReCAPTCHA from "react-google-recaptcha";

interface FormValues {
    title: string
    firstName: string
    lastName: string
    email: string
    phone: string
    travelDate: Date | null,
    destination: string,
    pax: string,
    remark: string
    captcha: string
}

interface DestinationProps {
    destinationName: string;
}

const Destination = ({ destinationName }: DestinationProps) => {

    const [openDialog, setOpenDialog] = useState<boolean>(false)

    const recaptcha = useRef(null);


    const { register: registerEnq, control: controlEnq, handleSubmit: handleSubmitEnq, formState: { errors }, } = useForm<FormValues>({ defaultValues: { travelDate: null, }, })

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }

    const Nights = [
        "3 Nights",
        "5 Nights",
        "7 Nights",
        "9 Nights",
        "10 Nights",
        "12 Nights",
    ];

    const Category = [
        "Adventure",
        "Family",
        "Hill Station",
        "Weekend",
        "Honeymoon",
        "Wildlife",
        "Group Tours",
        "Religious",
        "Heritage",
        "Culture",
        "Romantic",
        "Leisure",
        "Private",
    ];

    const Departure: string[] = [];

    const DestinationList = [
        "Shimla",
        "Manali",
        "Srinagar",
        "Kargil",
        "Leh",
        "Nubra",
        "Pangong",
        "Jispa",
        "Delhi",
        "Narkanda",
        "Sangla",
        "Chitkul",
        "Nako",
        "Kaza",
        "Chandratal",
        "Kalpa",
        "Sarahan",
        "Jibhi",
        "Dalhousie",
        "Amritsar",
        "Dharamshala",
    ];

    const Price = ["10001-15000","15001-20000","20001-25000"];

const Plans = [
    {
        name: "Kinnaur Wonders with Manali",
        duration: "8 Days, 7 Nights",
        destinations: "Narkanda, Sangla, Kalpa, Sarahan, Jibhi, Manali",
        category: ["Hill Station", "Adventure", "Leisure"],
        price: "14000, 18000"
    },
    {
        name: "Tribal Circuit with Chandertal Lake",
        duration: "10 Days, 9 Nights",
        destinations: "Narkanda, Sangla, Chitkul, Nako, Kaza, Chandertal, Manali",
        category: ["Adventure", "Culture", "Group Tours"],
       price: "22000, 26000"
    },
    {
        name: "Shimla Manali Luxury Tour Package",
        duration: "6 Days, 5 Nights",
        destinations: "Shimla, Kufri, Manali, Solang Valley, Kullu",
        category: ["Family", "Leisure", "Hill Station", "Private"],
        price: "18000, 22000"
    },
    {
        name: "North India Escapades",
        duration: "13 Days, 12 Nights",
        destinations: "Srinagar, Kargil, Leh, Nubra, Pangong, Jispa, Manali, Delhi",
        category: ["Adventure", "Group Tours", "Culture"],
        price: "30000, 38000"
    },
    {
        name: "Manali Honeymoon Special",
        duration: "5 Days, 4 Nights",
        destinations: "Manali, Solang Valley, Rohtang Pass, Kullu",
        category: ["Honeymoon", "Romantic", "Private"],
        price: "15000, 20000"
    },
    {
        name: "Himachal Adventure Trail",
        duration: "9 Days, 8 Nights",
        destinations: "Manali, Kasol, Tosh, Kheerganga, Jibhi, Tirthan Valley",
        category: ["Adventure", "Group Tours", "Hill Station"],
        price: "20000, 26000"
    },
    {
        name: "Spiti Valley Road Trip",
        duration: "11 Days, 10 Nights",
        destinations: "Shimla, Kalpa, Kaza, Key Monastery, Chandertal, Manali",
        category: ["Adventure", "Culture", "Heritage"],
        price: "28000, 35000"
    },
    {
        name: "Manali Family Holiday",
        duration: "7 Days, 6 Nights",
        destinations: "Manali, Solang Valley, Naggar, Kullu, Manikaran",
        category: ["Family", "Leisure", "Hill Station"],
         price: "16000, 21000"
    },
    {
        name: "Leh Ladakh with Manali",
        duration: "12 Days, 11 Nights",
        destinations: "Manali, Jispa, Sarchu, Leh, Nubra Valley, Pangong Lake",
        category: ["Adventure", "Group Tours", "Culture"],
        price: "32000, 42000"
    },
    {
        name: "Best of Himachal Pradesh",
        duration: "10 Days, 9 Nights",
        destinations: "Shimla, Narkanda, Sangla, Kalpa, Manali, Dharamshala",
        category: ["Family", "Leisure", "Hill Station"],
        price: "20000, 26000"
       
    },
];



    // Filtering destination data 
    const [selectedNights, setSelectedNights] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string[]>([])
    const [selectedDestinations, setSelectedDestinations] = useState<string[]>([])
    const [selectedPrice, setSelectedPrice] = useState<string[]>([])

    // console.log(selectedNights, selectedCategory, selectedDestinations, selectedPrice)

    // console.log(selectedPrice)

    // Filtered Data
    const FilteredPlans = Plans.filter((plan) => {
        const nights = plan.duration
            .split(",")
            .map(n => n.trim())

        const destinations = plan.destinations
            .split(",")
            .map(d => d.trim())

        const category = plan.category.map(c => c.trim())

        const price = plan.price.split(",").map((p)=>p.trim())

        const nightsMatch =
            !selectedNights.length ||
            selectedNights.some(n => nights.includes(n))

        const destinationMatch =
            !selectedDestinations.length ||
            selectedDestinations.some(d => destinations.includes(d))

        const categoryMatch =
            !selectedCategory.length ||
            selectedCategory.some(c => category.includes(c))

        const priceMatch = !selectedPrice.length || selectedPrice.some((c)=> price.includes(c))

        if(!nightsMatch && !destinationMatch && !categoryMatch){
            return <h1>No Match Found</h1>
        }

        return nightsMatch && destinationMatch && categoryMatch 
    })



    return (
        <div className="w-full overflow-hidden">
            <Navbar bgwhite={true} />

            {/* HERO SECTION */}
            <div className="relative h-[55vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 -z-20 bg-black">
                    <img
                        src="https://www.holidays2cherish.com/public/images/search-result-listing.jpg"
                        className="w-full h-full object-cover brightness-75"
                        alt="Destination"
                    />
                </div>

                <h1 className=" text-2xl sm1:text-4xl font-semibold text-white capitalize">
                    {destinationName} Tour Packages!
                </h1>

                <hr className="h-px opacity-50 w-[50%] bg-white mt-5" />

                <a onClick={() => setOpenDialog(true)} className="mt-10 px-5 py-2.5 btn-primary rounded-[5px] text-white cursor-pointer">Request Callback</a>

                <div className="absolute inset-x-0 bottom-0 h-10 bg-black/70" />

                <div className="absolute bottom-2 left-[15%] text-white">
                    <span>Holidays</span>
                    <span className="font-semibold capitalize">/{destinationName}</span>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="my-10">
                <div className="mx-auto max-w-350 px-5">
                    <div className="flex gap-10 lg:h-[calc(100vh-120px)]">
                        {/* FILTER */}
                        <aside className="hidden lg:block w-[20%] border-t-4 border-[#3fa72a] h-full">
                            <div className="sticky top-0 h-fit max-h-[calc(100vh-100px)] overflow-y-auto shadow-2xl" style={{ scrollbarWidth: "thin" }} >
                                <div className="p-5">
                                    <p className="font-semibold">7 out of 7 packages</p>

                                    <div className="flex justify-between items-center mt-2">
                                        <span>Filter</span>
                                        <span className="flex items-center gap-x-2 cursor-pointer">
                                            <RotateCcw size={16} />
                                            Reset
                                        </span>
                                    </div>

                                    <hr className="my-3 h-0.5 bg-black" />

                                    <FilterSection title="Number of Nights" data={Nights} setState={setSelectedNights} />
                                    <FilterSection title="Category" data={Category} setState={setSelectedCategory} />
                                    <FilterSection title="Departure From" data={Departure} />
                                    <FilterSection title="Destination" data={DestinationList} setState={setSelectedDestinations} />
                                    <FilterSection title="Price" data={Price} setState={setSelectedPrice} />
                                </div>
                            </div>
                        </aside>

                        {/* CARDS – SCROLLABLE */}
                        <main className="w-full lg:w-[80%] h-full lg:overflow-y-auto pr-2 bg-gray-100 flex flex-col gap-7" style={{ scrollbarWidth: "none" }} >
                            {FilteredPlans.map((plan, index) => (
                                <HolidayPackageCard
                                    key={index}
                                    name={plan.name}
                                    duration={plan.duration}
                                    destinations={plan.destinations}

                                />
                            ))}
                            <div>
                                <form
                                    onSubmit={handleSubmitEnq(onSubmit)}
                                    className=" flex w-full space-x-4 rounded-lg"
                                >

                                    <div className=' w-full flex flex-col gap-y-4 p-6'>

                                        <div>
                                            <h1 className="text-2xl font-semibold">
                                                We are here to serve you in the best way
                                            </h1>
                                            <hr className="my-3" />
                                            <p className="text-[16px] text-black">
                                                We would like to understand your plans and come up with the right strategic advice for best tour package for you.
                                            </p>
                                        </div>


                                        <div className="grid grid-cols-5 gap-3">
                                            <select
                                                {...registerEnq('title', { required: true })}
                                                className="rounded border px-3 py-2 text-sm bg-white"
                                            >
                                                <option value="Mr">Mr.</option>
                                                <option value="Ms">Ms.</option>
                                                <option value="Ms">Miss</option>
                                            </select>

                                            <input
                                                {...registerEnq('firstName', { required: 'First name required' })}
                                                placeholder="First Name"
                                                className="col-span-2 rounded border px-3 py-2 text-sm bg-white"
                                            />
                                            <input
                                                {...registerEnq('lastName', { required: 'Last name required' })}
                                                placeholder="Last Name"
                                                className="rounded col-span-2 border px-3 py-2 text-sm bg-white"
                                            />
                                        </div>


                                        <div className="grid grid-cols-2 gap-3">


                                            <input
                                                {...registerEnq('email', {
                                                    required: 'Email required',
                                                    pattern: {
                                                        value: /^\S+@\S+$/,
                                                        message: 'Invalid email',
                                                    },
                                                })}
                                                placeholder="Email Address"
                                                className="rounded border px-3 py-2 text-sm bg-white"
                                            />
                                            <Controller
                                                name="phone"
                                                control={controlEnq}
                                                rules={{ required: 'Mobile number required' }}
                                                render={({ field }) => (
                                                    <PhoneInput
                                                        {...field}
                                                        country="in"
                                                        enableSearch
                                                        placeholder="Mobile"
                                                        inputClass="!w-full !border !rounded !py-3 !pl-12 !text-sm h-[40px]! bg-white"
                                                        containerClass="!w-full"
                                                    />
                                                )}
                                            />
                                        </div>


                                        <div className="grid grid-cols-3 gap-3">
                                            <Controller
                                                name="travelDate"
                                                control={controlEnq}
                                                rules={{ required: 'Travel date required' }}
                                                render={({ field }) => (
                                                    <div className="relative w-full bg-white">
                                                        <DatePicker
                                                            selected={field.value}
                                                            onChange={field.onChange}
                                                            placeholderText="Traveller Date"
                                                            className="w-full rounded border px-3 py-2 pr-10 text-sm"
                                                            wrapperClassName="w-full"
                                                        />
                                                        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                                                            📅
                                                        </span>
                                                    </div>
                                                )}
                                            />
                                            <input
                                                {...registerEnq('destination', { required: 'Destination is required' })}
                                                placeholder="Manali"
                                                className=" rounded border px-3 py-2 text-sm bg-white"
                                            />
                                            <input
                                                {...registerEnq('pax', { required: 'Number of pax is required' })}
                                                placeholder="No.of Pax"
                                                className=" rounded border px-3 py-2 text-sm bg-white"
                                            />
                                        </div>

                                        <textarea
                                            {...registerEnq('remark')}
                                            placeholder="Remark...."
                                            className="col-span-2 rounded border px-3 py-2 text-sm bg-white"
                                            cols={50}
                                            rows={4}
                                        />

                                        <div className="flex items-center gap-3">
                                            <input
                                                {...registerEnq('captcha', { required: 'Captcha required' })}
                                                placeholder="Captcha code*"
                                                className=" rounded border px-3 py-2 text-sm bg-white"
                                            />
                                            <span className="font-semibold text-blue-600">epidemy</span>
                                            {/* <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_SITE_KEY} ref={recaptcha}/> */}
                                            {/* <button type="button" className="text-green-600">
                                                ⟳
                                            </button> */}
                                        </div>

                                        <div className="flex justify-end pt-2">
                                            <button
                                                type="submit"
                                                className="rounded bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700 cursor-pointer"
                                            >
                                                Send Enquiry
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <Footer />
            <BottomFooter />
            <Modal isOpen={openDialog} setIsOpen={setOpenDialog} >
                <EnquiryForm image="https://www.holidays2cherish.com/public/upload/holidays2cherish/images/enquiry_holidays2cherish.jpg" title="Haven't found an offer you like?" />
            </Modal>

        </div>
    );
};

export default Destination;
