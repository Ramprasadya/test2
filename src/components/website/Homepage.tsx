"use client";
import React, { useState } from "react";
import { Earth, HandCoins, SearchIcon, Users } from "lucide-react";
import RatingMedia from "../assets/rating-media.png";
const Card = dynamic(
  () => import("../UiComponents/CardComponent/Card"),
  { ssr: false, loading: () => <div className="h-40 bg-gray-200 rounded-xl animate-pulse" /> }
);
import Mauritius from "../assets/places/mauritius.jpg";
import Maldives from "../assets/places/maldives.jpg";
import Seychelles from "../assets/places/seychelles.jpg";
import Bali from "../assets/places/bali.jpg";
import Arab from "../assets/destination/arab.jpg";
import Azerbaijan from "../assets/destination/azerbaijan.jpg";
import holidays2cherish from "../assets/destination/holidays2cherish.webp";
import Hongkong from "../assets/destination/hongkong.webp";
import Malaysia from "../assets/destination/malaysia.webp";
import Maldives1 from "../assets/destination/maldives.webp";
import Mauritius1 from "../assets/destination/mauritius.webp";
import singapore from "../assets/destination/singapore.webp";
import thailand from "../assets/destination/thailand.jpg";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Navbar from "../navbar/Navbar";
import { WordRotate } from "../ui/word-rotate";
import Title from "../UiComponents/Title";
import Carousel from "../UiComponents/Carausel";
import Footer from "../navbar/Footer";
import BottomFooter from "../navbar/BottomFooter";
import Link from "next/link";
const PackageCard = dynamic(
  () => import("../UiComponents/CardComponent/PackageCard"),
  { ssr: false, loading: () => <div className="h-40 bg-gray-200 rounded-xl animate-pulse" /> }
);

const PackageCard2 = dynamic(
  () => import("../UiComponents/CardComponent/PackageCard2"),
  { ssr: false, loading: () => <div className="h-40 bg-gray-200 rounded-xl animate-pulse" /> }
);

const Testimonial = dynamic(
  () => import("../UiComponents/Testimonial"),
  { ssr: false, loading: () => <div className="h-40 bg-gray-200 rounded-xl animate-pulse" /> }
);


const Homepage = () => {
  const Word = ["Thrills", "Experiences", "Adventures", "Escapes"];
  const Tiles = [
    {
      first: "45000 +",
      second: "HAPPY CLIENTS",
      icon: <Users className="w-8 h-8" />,
      image: "",
    },
    {
      first: "0 % INTEREST",
      second: "EASY EMI OPTIONS",
      icon: <Earth className="w-8 h-8" />,
      image: "",
    },
    {
      first: "TRAVEL",
      second: "INSURANCE",
      icon: <HandCoins className="w-8 h-8" />,
      image: "",
    },
    {
      first: "4.7 ★ ★ ★ ★ ⯪",
      second: "GOOGLE RATINGS",
      icon: "",
      image: RatingMedia,
    },
  ];
  const Place = [
    {
      place: "Mauritius",
      image: Mauritius,
    },
    {
      place: "Maldives",
      image: Maldives,
    },
    {
      place: "Seychelles",
      image: Seychelles,
    },
    {
      place: "Bali",
      image: Bali,
    },
  ];
  const CelebrityDiary = [
    {
      youtubeUrl:
        "https://www.youtube.com/embed/MDDSrof-u4I?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/10/1704692202.jpg",
    },
    {
      youtubeUrl:
        "https://www.youtube.com/embed/xFOBfeIMGH8?feature=oembed&amp;autoplay=1&amp;rel=0&amp;controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/9/1704692418.png",
    },
    {
      youtubeUrl:
        "https://www.youtube.com/embed/u5dhx_JZwFA?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/8/1704692573.png",
    },
    {
      youtubeUrl:
        "https://www.youtube.com/embed/v13qAyr2zSE?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/7/1704692823.png",
    },
    {
      youtubeUrl:
        "https://www.youtube.com/embed/ZijwUD_G8WI?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/6/1698066897.png",
    },
    {
      youtubeUrl:
        "https://www.youtube.com/embed/JVAL0mFc97k?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/5/1704692835.jpg",
    },
    {
      youtubeUrl:
        "https://www.youtube.com/embed/E4WWrw916oc?feature=oembed&autoplay=1&rel=0&controls=0",
      thumbnail:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/youtube/3/1704692846.jpg",
    },
  ];
  const Destination = [
    {
      image: Arab,
      name: "United Arab Emirates",
      style: "h-[242px] ",
    },
    {
      image: thailand,
      name: "Thailand",
      style: "h-[152px]",
    },
    {
      image: singapore,
      name: "Singapore",
      style: "h-[154px]",
    },
    {
      image: Mauritius1,
      name: "Mauritius",
      style: "h-[171px] ",
    },
    {
      image: Maldives1,
      name: "Maldives",
      style: "h-[223px]",
    },
    {
      image: Malaysia,
      name: "Malaysia",
      style: "h-[154px]",
    },
    {
      image: Hongkong,
      name: "Hong Kong",
      style: "h-[266px]",
    },
    {
      image: Azerbaijan,
      name: "Azerbaijan",
      style: "h-[260px]",
    },
  ];
  const PackageData = [
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1869/1869_1733737484_0.jpg",
      title: "Jewels Of Austria Prague and Budapest",
      address: "Vienna, Budapest, Pr",
      price: "2,34,400",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1870/1870_1733737405_0.jpg",
      title: "Europe Winter Carnival with Christmas Markets",
      address: "Frankfurt, Nuremberg",
      price: "2,87,500",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1866/1866_1733737589_0.jpg",
      title: "Romantic Switzerland and Paris 2024",
      address: "Geneva, Zurich, Pari",
      price: "3,13,600",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1868/1868_1733737788_0.jpg",
      title: "Wonders of UK and Scotland",
      address: "London, Birmingham, ",
      price: "3,24,750",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1867/1867_1733737733_0.jpg",
      title: "Finland with Northern Lights",
      address: "Helsinki, Ivalo, Rov",
      price: "3,35,200",
    },
  ];
  const TrendingEscape = [
    {
      image: Arab,
      name: "United Arab Emirates",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/381/images/small/381_1722332953.jpg",
      name: "Turkey",
    },
    {
      image: thailand,
      name: "Thailand",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/625/images/small/625_1720185181.jpg",
      name: "Switzerland",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/595/images/small/595_1733739491.webp",
      name: "Sri Lanka",
    },
    {
      image: singapore,
      name: "Singapore",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/596/images/small/596_1733739604.webp",
      name: "Seychelles",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/597/images/small/597_1733739628.webp",
      name: "New Zealand",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/626/images/small/626_1733739725.webp",
      name: "Netherlands",
    },
    {
      image: Mauritius,
      name: "Mauritius",
    },
    {
      image: Maldives,
      name: "Maldives",
    },
    {
      image: Malaysia,
      name: "Malaysia",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/598/images/small/598_1733739855.webp",
      name: "Italy",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/599/images/small/599_1733739890.webp",
      name: "Indonesia",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/627/images/small/627_1733739926.webp",
      name: "Iceland",
    },
    {
      image: Hongkong,
      name: "Hong Kong",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/600/images/small/600_1733739980.webp",
      name: "Greece",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/628/images/small/628_1733740021.webp",
      name: "France",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/country/629/images/small/629_1733740073.webp",
      name: "Egypt",
    },
    {
      image: Azerbaijan,
      name: "Azerbaijan",
    },
  ];
  const HillArious = [
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1839/1839_1721040035_0.jpg",
      duration: "6 Days, 5 Nights",
      title: "Best of Kashmir Tour Package",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1840/1840_1720693253_0.jpg",
      duration: "6 Days, 5 Nights",
      title: "Shimla Manali Luxury Tour Package by car",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1842/1842_1721040074_0.jpg",
      duration: "6 Days, 5 Nights",
      title: "Leh Ladakh Tour Package",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1843/1843_1721040149_0.jpg",
      duration: "5 Days, 4 Nights",
      title: "Venice of East with Hills",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1844/1844_1721737667_0.jpg",
      duration: "6 Days, 5 Nights",
      title: "Jim Corbett Nainital Tour",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1842/1842_1721040074_0.jpg",
      duration: "6 Days, 5 Nights",
      title: "Leh Ladakh Tour Package",
    },
  ];
  const PeacePlaces = [
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1841/1841_1721045289_0.jpg",
      duration: "6 Days, 5 Nights",
      title: "Ayodhya with Prayagraj tour Package",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1860/1860_1721384089_0.jpg",
      duration: "5 Days, 4 Nights",
      title: "Do Dham Yatra Package by Car",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1861/1861_1721737614_0.jpg",
      duration: "3 Days, 2 Nights",
      title: "Dwarka & Somnath Tour",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1862/1862_1721385537_0.jpg",
      duration: "4 Days, 3 Nights",
      title: "Do Dham Yatra by Helicopter",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1863/1863_1721385547_0.jpg",
      duration: "3 Days, 2 Nights",
      title:
        "Amarnath Yatra Package (Package Via Helicopter 2024 Via Sonmarg Neelgrath)",
    },
    {
      image:
        "https://www.holidays2cherish.com/public/upload/holidays2cherish/tours/1503/1503_1721040237_0.jpg",
      duration: "3 Days, 2 Nights",
      title: "Holy Haridwar Tour Package",
    },
    {
      image:
        "https://b2bzend.s3.ap-south-1.amazonaws.com/img/4539/package/images/himachal-delights-with-holy-amritsar_1678113732",
      duration: "11 Days, 10 Nights",
      title: "HIMACHAL DELIGHTS WITH HOLY AMRITSAR",
    },
  ];
  const Testimonials = [
    {
      name: "Maqsood  shaik",
      trip: "Baku Trip",
      description:
        "We are finally back home from our Baku trip and I would like to thanks Ms Harpreet for organising such a wonderful trip. We had a wonderful time at gabala also...",
    },
    {
      name: "Sonali  Gupta",
      trip: "Honeymoon Trip",
      description:
        "We had our honeymoon trip at very best with very luxurious experience and hassle free travel. Our agent Komal was very helpful throughout our 10 day trip to...",
    },
    {
      name: "Dean  Rodrigues",
      trip: "Bali Trip",
      description:
        "Every aspect of our trip felt like it was designed just for us. Thank you Gaurav and Holidays 2 cherish team for your thoughtful planning and insights and for making...",
    },
    {
      name: "Chiradeep  Sen",
      trip: "Review of Holiday Cherish and Executive Bhawna Bhora's Vietnam Package ",
      description:
        "I recently had the pleasure of booking a vacation to Vietnam through Holiday 2 Cherish, for my Mom and Dad who are 60+ of age and I must say it was an...",
    },
    {
      name: "Ashish  Gupta",
      trip: "Singapore Trip",
      description:
        "I have booked my package to Singapore and its the best experience. The package was ultimate and more than that their customer service was utmost, everything...",
    },
    {
      name: "Shubham  Junsot",
      trip: "Europe Trip",
      description:
        "Great Experience with Holidays 2 cherish. We travelled to Europe for a 11 nights itinerary with them.One of the best companies offering best customer service. They help a...",
    },
    {
      name: "Dhara Shah",
      trip: "Thailand experience!",
      description:
        "I recently planned the Thailand with holidayscherish with a group of friends, and our experience was significantly enhanced by the exceptional services....",
    },
  ];
  const destinations = [
    "United Arab Emirates",
    "Manali",
    "Mauritius",
    "Hong Kong",
    "Thailand",
    "Maldives",
    "Azerbaijan",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Sri Lanka",
    "Turkey",
    "Georgia",
    "Vietnam",
    "Japan",
    "South Korea",
    "Italy",
    "France",
    "Switzerland",
    "Spain",
    "Greece",
  ];

  const [searchDestination, setSearchDestination] = useState<string>("")
  const [matchDestination, setMatchDestination] = useState<string[]>([])
  const router = useRouter()

  const HandleSearchDestination = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchDestination(value)
    if (value.length > 2) {
      const findDest = destinations.filter(
        item => item.toLowerCase().includes(value.toLowerCase())
      )
      console.log(findDest)
      setMatchDestination(findDest)
    }
  }

  return (
    <div className="relative w-full md:w-236 mlg:w-full!">
      <Navbar />
      {/*Hero section */}
      <section className="relative w-full h-[50vh] sm1:h-[70vh] md:h-screen overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden bg-black">
          <img src={Bali.src} className="object-cover w-full" alt="Bali" />
        </div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-[50vh] sm1:h-[70vh] md:h-screen
                       min-w-screen min-h-[56.25vw]
                       -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/ziKCB6sWAsE?autoplay=1&mute=1&controls=0&loop=1&playlist=ziKCB6sWAsE&playsinline=1"
            allow="autoplay; fullscreen"
          />
        </div>
        {/* <div className="absolute inset-0 bg-black/40 -z-10" /> */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
          <h1 className="text-xl sm1:text-2xl sm:text-4xl font-normal">
            It's time for new
          </h1>
          <h1 className="">
            <WordRotate
              words={Word}
              className=" text-2xl sm1:text-3xl md:text-[80px] font-bold sm:text-5xl  mt-1"
            />
          </h1>
          <div className="sm1:mt-6 w-[80%] sm1:w-full max-w-xl">
            <div className="flex items-center gap-2 border-2 border-green-700 bg-white rounded-md px-2 sm1:px-4 py-2 sm1:py-3 text-black">
              <input
                value={searchDestination}
                onChange={HandleSearchDestination}
                className="flex-1 outline-none"
                type="text"
                placeholder="Search Destinations, Tours, Activities"
              />
              <SearchIcon className="text-gray-600" />
            </div>
            <div className="bg-gray-600 rounded-md">
              {
                matchDestination.map((d, i) =>
                  <Link href={`/holidays/${d.toLowerCase()}`} key={i}>{d}</Link>
                )
              }
            </div>
          </div>
        </div>
      </section>
      {/* Tiles */}
      <section className="bg-black text-white p-4 mb-5 md:mb-10  ">
        <div className=" flx flex-col xsm:grid gap-y-4 justify-center items-start text-left grid-cols-2 md:grid-cols-4">
          {Tiles.map((item, indx) => (
            <div key={indx} className="flex items-center gap-x-3 mt-3 xsm:mt-0">
              {item.icon ? (
                <span>{item.icon}</span>
              ) : (
                <img src={typeof item.image === "string" ? item.image : item.image.src} alt="rating image" />
              )}
              <p className="flex flex-col ">
                <span className="text-[12px] font-semibold">{item.first}</span>
                <span className="text-[12px] font-semibold">{item.second}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* third */}
      <section className="mb-10 overflow-x-hidden mx-2 sm1:mx-10 xl:mx-18">
        <div className="flex flex-col lg:flex-row lg:justify-around items-center relative w-full px-4">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="hidden lg:flex text-2xl md:text-3xl text-[#3a3a3a] font-semibold">
              Romantic <br />
              Escapes:
              <br />
              Honeymoon
              <br />
              Getaways
            </h1>
            <h1 className="flex lg:hidden text-2xl md:text-3xl text-[#3a3a3a] font-semibold">
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
        <Title title="Celebrity Travel Dairies" />
        <div>
          <Carousel>
            {CelebrityDiary.map((item, index) => (
              <div key={index} style={{ width: 200 }} className="h-90">
                <a
                  href={item.youtubeUrl}
                  data-fancybox="gallery"
                  className="block w-full h-full rounded-[15px] overflow-hidden"
                >
                  <img
                    src={item.thumbnail}
                    alt="Youtube"
                    className="
            w-full h-full object-cover
            rounded-[15px]
            transition-transform duration-500
            hover:scale-105
          "
                  />
                </a>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      {/* mesonary */}
      {/* MASONRY SECTION */}
      <section className="mx-2 sm1:mx-10 xl:mx-18 mb-20">
        <div className="flex flex-col lg:flex-row gap-x-5 justify-center items-start xl:justify-end">

          {/* LEFT BIG IMAGE */}
          <div className=" h-80 sm:h-120 md:h-147 w-full mr-2 lg:w-[40%] xl:w-[48%] relative">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[15px] brightness-75"
              src={holidays2cherish.src}
              alt="holidays2cherish"
            />

            <div className="relative h-full flex flex-col justify-end pb-10">
              <h1 className="text-2xl sm:text-5xl lg:text-3xl xl:text-5xl leading-none sm1:-tracking-[1.64px] text-white ml-8 font-bold">
                Easy go Destinations
              </h1>

              <div className="flex justify-end mt-6 mr-10">
                <button className=" px-2 py-2 sm1:px-4 sm1:py-2 text-white text-xl sm1:text-2xl font-semibold rounded-[5px] ptextb cursor-pointer transition">
                  Book & Fly
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT MASONRY */}
          <div className="w-full lg:w-[40%] xl:w-[48%] mt-4 xl:mt-0">
            <div className="destination-masonry">

              {Destination.map((item, index) => (
                <div
                  key={index}
                  className={`destination-masonry-item relative rounded-4xl overflow-hidden ${item.style}`}
                >
                  <img
                    src={item.image.src}
                    alt={item.name}
                    className="w-full h-full object-cover brightness-75"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm xsm:text-lg sm1:text-lg text-center px-3">
                      {item.name}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
      {/* Custommized package */}
      <section>
        <Title title={`European Delight : Group &\nCustomized packages`} />
        <Carousel >
          {PackageData.map((pack, index) => (
            <PackageCard
              image={pack.image}
              title={pack.title}
              address={pack.address}
              price={pack.price}
              key={index}
            />
          ))}
        </Carousel>
      </section>
      {/* Trending International Escapes Await */}
      <section className=" my-10">
        <Title title={`Trending International Escapes\nAwait`} />
        <Carousel>
          {TrendingEscape.map((item, index) => (
            <Card image={item.image} name={item.name} key={index} />
          ))}
        </Carousel>
      </section>
      {/* Simply hill-arious! */}
      <section>
        <Title title={`Simply Hill-Arious! `} />
        <Carousel>
          {HillArious.map((item, index) => (
            <PackageCard2
              image={item.image}
              title={item.title}
              key={index}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </section>
      <section className="my-10">
        <Title title="Finding Peace - Soulful Moments !" />
        <Carousel>
          {PeacePlaces.map((item, index) => (
            <PackageCard2
              image={item.image}
              title={item.title}
              key={index}
              duration={item.duration}
            />
          ))}
        </Carousel>
      </section>
      {/* Testimonial */}
      <section className="bg-[#efefef] pt-7.5 pb-10 w-full  ">
        <div className="flex flex-col">
          <h1 className="text-[16px] font-semibold text-center sm:text-left mx-10 lg:mx-20 xl:mx-30">
            Let customer's review do the talking!
          </h1>
          <div className="mt-5">
            <Carousel arrow={true}>
              {Testimonials.map((item, index) => (
                <div className="pt-4 relative" >
                  <Testimonial
                    name={item.name}
                    trip={item.trip}
                    description={item.description}
                    key={index}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex justify-end  mt-5">
            <button className=" px-4 py-2 ptextb text-white mr-5 xsm:mr-10  sm:mr-20 lg:mr-20 rounded-[5px] ">
              View All
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <BottomFooter />
    </div>
  );
};

export default Homepage;
