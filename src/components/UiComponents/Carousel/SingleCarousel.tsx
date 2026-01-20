"use client";

import React, { ReactNode, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}

const SingleCarousel = ({children}:CarouselProps) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

      const sliderRef = useRef<Slider>(null);

  const Next = () => sliderRef.current?.slickNext();
  const Previous = () => sliderRef.current?.slickPrev();

    return (
        <div className="relative w-full  mx-auto">
            <Slider {...settings}>
                {children}
            </Slider>
        
        <>
          <button
            onClick={Previous}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden 
            h-12 w-12 rounded-full bg-white text-[#3fa72a] border xsm:flex items-center justify-center shadow cursor-pointer "
          >
            <MoveLeft />
          </button>

          <button
            onClick={Next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden
            h-12 w-12 rounded-full bg-white text-[#3fa72a] border xsm:flex items-center justify-center shadow cursor-pointer "
          >
            <MoveRight />
          </button>
        </>
    
        </div>
    );
};

export default SingleCarousel;
