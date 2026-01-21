import Link from 'next/link'
import React from 'react'
import Footer from '../navbar/Footer'
import BottomFooter from '../navbar/BottomFooter'
import Navbar from '../navbar/Navbar'

export const AboutUs = () => {
    return (
        <div className='w-full overflow-hidden'>
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
                        <h1 className='text-3xl text-white  font-thin ' >About Us | Holidays 2 Cherish</h1>
                    </div>
                    <div>
                        <Link href="/" >Home &nbsp;&nbsp; </Link>
                        <Link href="/aboutus" className="font-semibold capitalize"> About Us | Holidays 2 Cherish</Link>
                    </div>
                </div>
            </div>
            <section className="bg-white px-6 py-14">
                <div className="max-w-6xl mx-auto space-y-6 text-[16px] leading-[1.75] text-black">
                    <p>
                        Welcome to <span className="font-bold">Holidays 2 Cherish</span>, your ultimate
                        destination for{" "}
                        <span className="font-bold">
                            hassle-free, luxurious, and budget-friendly travel experiences
                        </span>
                        . Established in 2011, our journey began with a passion to redefine the way
                        people explore the world, offering a one-stop-shop for all their travel needs.
                    </p>

                    <p>
                        At Holidays 2 Cherish, we understand that planning a holiday can often be
                        overwhelming. That's why we're here to take the stress out of your hands and
                        let you relax while we handle all the details. Whether you're dreaming of a
                        romantic getaway, an adventurous expedition, or a family-friendly retreat,
                        we've got you covered.
                    </p>

                    <p>
                        What sets us apart is our unwavering commitment to providing personalized
                        service and unparalleled convenience. Our dedicated team of travel experts is
                        available 24/7, ensuring that you're always connected and supported throughout
                        your journey. From the moment you reach out to us to the time you return home,
                        we're here to make sure your experience is nothing short of extraordinary.
                    </p>

                    <p>
                        With Holidays 2 Cherish, you can explore the whole world with confidence,
                        knowing that every aspect of your trip has been carefully curated to exceed
                        your expectations. Whether you're seeking luxury accommodations, unique
                        cultural experiences, or off-the-beaten-path adventures, we'll tailor your
                        itinerary to suit your preferences and ensure that every moment is filled
                        with memories to cherish for a lifetime.
                    </p>

                    <p className="pt-4">
                        So why wait? Join us on a journey of discovery and let Holidays 2 Cherish turn
                        your travel dreams into reality. Because when it comes to exploring the world,
                        there's no better companion than us.
                    </p>
                </div>
            </section>
            <Footer />
            <BottomFooter />
        </div>
    )
}
