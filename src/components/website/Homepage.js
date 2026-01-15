"use client"
import React from "react"
import Navbar from "../navbar/Navbar.js"
import { Earth, HandCoins, SearchIcon, Users } from "lucide-react"
import { WordRotate } from "../ui/word-rotate.js"
import RatingMedia from "../assets/rating-media.png"
import Card from "../UiComponents/Card.js"
import Mauritius from "../assets/places/mauritius.jpg"
import Maldives from "../assets/places/maldives.jpg"
import Seychelles from "../assets/places/seychelles.jpg"
import Bali from "../assets/places/bali.jpg"
import Carousel from "../UiComponents/Carausel.js"
import Arab from "../assets/destination/arab.jpg"
import Azerbaijan from "../assets/destination/azerbaijan.jpg"
import holidays2cherish from "../assets/destination/holidays2cherish.webp"
import Hongkong from "../assets/destination/hongkong.webp"
import Malaysia from "../assets/destination/malaysia.webp"
import Maldives1 from "../assets/destination/maldives.webp"
import Mauritius1 from "../assets/destination/mauritius.webp"
import singapore from "../assets/destination/singapore.webp"
import thailand from "../assets/destination/thailand.jpg"


const Homepage = () => {
  const Word = ["Thrills", "Experiences", "Adventures", "Escapes"]
  const Tiles = [
    {
      first: "45000 +",
      second: "HAPPY CLIENTS",
      icon: <Users className="w-8 h-8" />,
      image: ""
    },
    {
      first: "0 % INTEREST",
      second: "EASY EMI OPTIONS",
      icon: <Earth className="w-8 h-8" />,
      image: ""
    },
    {
      first: "TRAVEL",
      second: "INSURANCE",
      icon: <HandCoins className="w-8 h-8" />,
      image: ""
    },
    {
      first: "4.7 ★ ★ ★ ★ ⯪",
      second: "GOOGLE RATINGS",
      icon: "",
      image: RatingMedia

    }
  ]
  const Place = [
    {
      place: "Mauritius",
      image: Mauritius
    },
    {
      place: "Maldives",
      image: Maldives
    },
    {
      place: "Seychelles",
      image: Seychelles
    },
    {
      place: "Bali",
      image: Bali
    },
  ]
  const CelebrityDiary = [
    {
      youtubeUrl: "https://www.youtube.com/embed/MDDSrof-u4I?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/10/1704692202.jpg"
    },
    {
      youtubeUrl: "https://www.youtube.com/embed/xFOBfeIMGH8?feature=oembed&amp;autoplay=1&amp;rel=0&amp;controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/9/1704692418.png"
    },
    {
      youtubeUrl: "https://www.youtube.com/embed/u5dhx_JZwFA?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/8/1704692573.png"
    },
    {
      youtubeUrl: "https://www.youtube.com/embed/v13qAyr2zSE?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/7/1704692823.png"
    },
    {
      youtubeUrl: "https://www.youtube.com/embed/ZijwUD_G8WI?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/6/1698066897.png"
    },
    {
      youtubeUrl: "https://www.youtube.com/embed/JVAL0mFc97k?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/5/1704692835.jpg"
    },
    {
      youtubeUrl: "https://www.youtube.com/embed/E4WWrw916oc?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail: "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/3/1704692846.jpg"
    },
  ]
  const Destination = [
    {
      image:Arab,
      name:"United Arab Emirates",
      style:"h-[242px]"
    },
    {
      image:thailand,
      name:"Thailand",
      style:"h-[152px]"
    },
    {
      image:singapore,
      name:"Singapore",
      style:"h-[154px]"
    },
    {
      image:Mauritius1,
      name:"Mauritius",
      style:"h-[171px]"
    },
    {
      image:Maldives1,
      name:"Maldives",
      style:"h-[223px]"
    },
    {
      image:Malaysia,
      name:"Malaysia",
      style:"h-[154px]"
    },
    {
      image:Hongkong,
      name:"Hong Kong",
      style:"h-[266px]"
    },
    {
      image:Azerbaijan,
      name:"Azerbaijan",
      style:"h-[260px]"
    },
  ]
  return (
    <div className="relative w-full md:w-236 mlg:w-full!">
      <Navbar />
      {/*Hero section */}
      <section className="relative w-full h-screen overflow-hidden">

        <div className="absolute inset-0 -z-10 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-screen
                       min-w-screen min-h-[56.25vw]
                       -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/ziKCB6sWAsE?autoplay=1&mute=1&controls=0&loop=1&playlist=ziKCB6sWAsE&playsinline=1"
            allow="autoplay; fullscreen"
          />
        </div>
        {/* <div className="absolute inset-0 bg-black/40 -z-10" /> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-2xl sm:text-4xl font-normal">
            It's time for new
          </h1>
          <h1 className="">
            <WordRotate words={Word} className="text-3xl md:text-[80px] font-bold sm:text-5xl  mt-1" />
          </h1>
          <div className="mt-6 w-full max-w-xl">
            <div className="flex items-center gap-2 border-2 border-green-700 bg-white rounded-md px-4 py-3 text-black">
              <input
                className="flex-1 outline-none"
                type="text"
                placeholder="Search Destinations, Tours, Activities"
              />
              <SearchIcon className="text-gray-600" />
            </div>
          </div>
        </div>
      </section>
      {/* Tiles */}
      <section className="bg-black text-white p-4 mb-5 md:mb-10  " >
        <div className=" flex flex-col gap-y-4 justify-center items-center text-left sm:grid sm:grid-cols-2 md:grid-cols-4">
          {
            Tiles.map((item, indx) =>
              <div key={indx} className="flex items-center gap-x-3">
                {item.icon ? <span>{item.icon}</span> : <img src={item.image.src} alt="rating image" />}
                <p className="flex flex-col ">
                  <span className="text-[12px] font-semibold">{item.first}</span>
                  <span className="text-[12px] font-semibold">{item.second}</span>
                </p>
              </div>
            )
          }
        </div>
      </section>
      {/* third */}
      <section className="mb-10 overflow-x-hidden">
        <div className="flex flex-col lg:flex-row lg:justify-around items-center relative w-full px-4">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="hidden lg:flex text-2xl md:text-3xl text-black font-semibold">
              Romantic <br />Escapes:<br />Honeymoon<br />Getaways
            </h1>
            <h1 className="flex lg:hidden text-2xl md:text-3xl text-black font-semibold">
              Romantic Escapes: Honeymoon Getaways
            </h1>
            <hr className="w-20 ptextb mt-4 h-0.75 mb-4 lg:mb-0" />
          </div>
          <div className="flex gap-x-4 overflow-x-auto max-w-full">
            {Place.map((item, index) => (
              <div key={index} className="shrink-0">
                <Card image={item.image} name={item.place} />
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* celebrity */}
      <section className="flex flex-col w-full overflow-hidden mb-20">
        <div className="flex flex-col w-full justify-center items-center mb-5">
          <h1 className=" text-2xl md:text-3xl text-black font-semibold">Celebrity Travel Dairies</h1>
          <hr className="w-20 ptextb mt-4 h-0.75 mb-4 lg:mb-0" />
        </div>
        <div>
          <Carousel>
            {
              CelebrityDiary.map((item, index) =>
                <div key={index} className="h-100 w-56.5">
                  <a className="wrap rounded-[15px] h-100 w-56.5" href={item.youtubeUrl} data-fancybox="gallery" data-caption="Caption #1" style={{ width: "100%", display: "inline-block" }} tabIndex="0">
                    <img className="rounded-[15px] mx-10 h-100 w-56.5 hover:scale-105 shadow-lg transform transition-transform duration-500" src={item.thumbnail} alt="Youtube" />
                  </a>
                </div>
              )
            }
          </Carousel>
        </div>
      </section>
      {/* ........ */}
      <section className="mx-10 xl:mx-20">
         <div className="flex flex-col xl:flex-row gap-x-5 justify-between items-center">
            <div className="h-147 w-full mr-2 xl:w-[50%] relative ">
              <img className="absolute w-full h-full object-cover rounded-[15px] brightness-75  " src={holidays2cherish.src} alt="holidays2cheris"/>
              <div className="flex flex-col relative top-[80%]">
                <h1  className="text-5xl leading-1 -tracking-[1.64px] text-white ml-8 font-bold" >Easy go Destinations</h1>
                <div className="w-full items-end justify-end mt-10 flex mr-10 " >
                <button className="px-4 py-2 ptextb text-white text-2xl font-semibold rounded-[5px] mr-10" >Book & Fly</button>
                </div>
              </div>
            </div>
            <div className="flex w-full xl:w-auto items-center justify-center flex-col flex-wrap h-147 gap-5 mt-4 xl:mt-0">
              {Destination.map((item,index)=>
                <div key={index}>
                  <img className={`object-cover w-full xl:w-46.25 rounded-[15px] relative ${item.style} `} src={item.image.src} />
                </div>
              )}
            </div>
         </div>
      </section>
    </div>
  )
}

export default Homepage
