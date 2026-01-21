import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import Navbar from '../navbar/Navbar';
import Footer from '../navbar/Footer';
import BottomFooter from '../navbar/BottomFooter';

interface FormValues {
    title: string
    firstName: string
    lastName: string
    email: string
    phone: string
    pax: string
    message: string
    captcha: string
}

const ContactUs = () => {
    const { register: registerEnq, control: controlEnq, handleSubmit: handleSubmitEnq, formState: { errors }, } = useForm<FormValues>({})

    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    const phone = "919999859250";

    const message = `Hi, I visited Holidays 2 Cherish at https://www.holidays2cherish.com/contact-us . 
I am interested in this offer. Do contact me to discuss it further. Thanks,`;

    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    return (
        <div className='w-full'>
            <Navbar bgwhite={true} />
            <div className="relative h-[55vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 -z-20 bg-black">
                    <img
                        src="https://www.holidays2cherish.com/public/images/search-result-listing.jpg"
                        className="w-full h-full object-cover brightness-100"
                        alt="Destination"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-black/70" />

                <div className="absolute bottom-2 left-[10%] text-white">
                    <div>
                        <h1 className='text-3xl text-white  font-thin ' >Contact Us</h1>
                    </div>
                    <div>
                        <Link href="/" >Home &nbsp;&nbsp; </Link>
                        <Link href="/aboutus" className="font-semibold capitalize">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className='max-w-6xl mx-auto space-y-6 text-[16px] leading-[1.75] text-black my-10' >
                <div className='flex flex-col md:flex-row gap-y-10 px-5 md:px-10 lg:px-0 md:gap-x-10' >
                    <form
                        onSubmit={handleSubmitEnq(onSubmit)}
                        className=" flex w-full space-x-4  bg-gray-100"
                    >

                        <div className=' w-full flex flex-col gap-y-4 p-6'>
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
                                    rules={{ required: "Mobile number required" }}
                                    render={({ field }) => (
                                        <PhoneInput
                                            country="in"
                                            enableSearch
                                            value={field.value}
                                            onChange={(value) => field.onChange(value)}
                                            placeholder="Mobile"
                                            inputClass="!w-full !border !rounded !py-3 !pl-12 !text-sm !h-[40px] !bg-white"
                                            containerClass="!w-full"
                                        />
                                    )}
                                />

                            </div>
                            <textarea
                                {...registerEnq('message')}
                                placeholder="Message...."
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
                                    Submit Form
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="space-y-4  text-black">

                        {/* Company Name */}
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5" />
                            <h2 className="text-lg font-bold uppercase">
                                Holidays 2 Cherish
                            </h2>
                        </div>

                        <p className="ml-8 text-sm leading-relaxed">
                            16/10164 Second floor Padam Singh Road, Karol Bagh New Delhi, Delhi (India)
                        </p>

                        <hr />

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <Phone className="w-5 h-5 mt-1" />
                            <div>
                                <p className="font-semibold">Phone No:</p>
                                <p className="text-sm">
                                    <a className='hover:text-green-700' href='tel:+91 9999859250,' >+91 9999859250,</a> <a className='hover:text-green-700' href='tel:+91 9999859250'>+91 9999859250</a>
                                </p>
                            </div>
                        </div>

                        <hr />

                        {/* WhatsApp */}
                        <div className="flex items-start gap-4">
                            <MessageCircle className="w-5 h-5 mt-1" />
                            <div>
                                <p className="font-semibold">WhatsApp:</p>
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:underline hover:text-green-700"
                                >
                                    +91 99998 59250
                                </a>

                            </div>
                        </div>

                        <hr />

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <Mail className="w-5 h-5 mt-1" />
                            <div>
                                <p className="font-semibold">Email Id:</p>
                                <a href='mailto:info@holidays2cherish.com' className="text-sm hover:text-green-700">info@holidays2cherish.com</a>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <Footer />
            <BottomFooter />
        </div>
    )
}

export default ContactUs