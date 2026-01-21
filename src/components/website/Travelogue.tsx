import React from 'react'
import Navbar from '../navbar/Navbar'
import Link from 'next/link'
import BlogCard from '../UiComponents/CardComponent/BlogCard';
import { BlogPost } from '../../../types';
import Footer from '../navbar/Footer';
import BottomFooter from '../navbar/BottomFooter';



const Travelogue = () => {
    // data/blogs.ts


const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Corporate Travel Trends in 2026",
    image: "https://www.holidays2cherish.com/public/upload/holidays2cherish/travelogues/268/images/medium/1768668727_blog.webp",
    date: { day: "17", month: "JAN", year: "2026" },
    author: "Gulika Anand",
    excerpt:
      "Corporate travel isn't what it used to be. In 2026, companies are shifting from expense to experience.",
  },
  {
    id: 2,
    title: "Vietnam: where every street feels alive",
    image: "https://www.holidays2cherish.com/public/upload/holidays2cherish/travelogues/266/images/medium/1764229212_blog.webp",
    date: { day: "08", month: "DEC", year: "2025" },
    author: "Gulika Anand",
    excerpt:
      "Vietnam is a journey through culture, colors, food, and stories that stay with you.",
  },
  {
    id: 3,
    title: "Paris — where love meets light",
    image: "https://www.holidays2cherish.com/public/upload/holidays2cherish/travelogues/268/images/medium/1768668727_blog.webp",
    date: { day: "27", month: "NOV", year: "2025" },
    author: "Gulika Anand",
    excerpt:
      "Paris feels like a dream you don’t want to wake up from. Romance, history, and beauty everywhere.",
  },
  {
    id: 4,
    title: "Discover Georgia: Mountains & stories",
    image: "https://www.holidays2cherish.com/public/upload/holidays2cherish/travelogues/266/images/medium/1764229212_blog.webp",
    date: { day: "25", month: "NOV", year: "2025" },
    author: "Gulika Anand",
    excerpt:
      "Georgia blends ancient traditions with breathtaking landscapes and warm hospitality.",
  },
];

  return (
    <div className='w-full'>
        <Navbar bgwhite={true} />
          <div className="relative h-[55vh] flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 -z-20 bg-black">
                    <img
                        src="https://www.holidays2cherish.com/public/upload/holidays2cherish/static_pages/8/8_1749466987.webp"
                        className="w-full h-full object-cover brightness-100"
                        alt="Destination"
                    />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-20 bg-black/70" />

                <div className="absolute bottom-1.5 left-[10%] text-white">
                    <div>
                        <h1 className='text-3xl text-white  font-thin ' >Travelogue</h1>
                    </div>
                    <div>
                        <Link href="/" >Home &nbsp;&nbsp; </Link>
                        <Link href="/aboutus" className="font-semibold capitalize"></Link>Travelogue
                    </div>
                </div>
          </div>
           <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
    <Footer/>
    <BottomFooter/>
    </div>
  )
}

export default Travelogue