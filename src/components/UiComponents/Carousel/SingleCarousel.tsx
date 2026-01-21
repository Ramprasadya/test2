"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
}

const SingleCarousel = ({ children }: CarouselProps) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="relative w-full mx-auto">
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 
        h-12 w-12 rounded-full bg-white text-[#3fa72a] border 
        flex items-center justify-center shadow cursor-pointer "
      >
        <MoveLeft />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 
        h-12 w-12 rounded-full bg-white text-[#3fa72a] border 
        flex items-center justify-center shadow cursor-pointer "
      >
        <MoveRight />
      </button>
    </div>
  );
};

export default SingleCarousel;
