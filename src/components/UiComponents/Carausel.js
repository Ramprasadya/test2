"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";

function Carousel({ children, slides = 5, className="mx-10 sm:mx-20 md:mx-30", arrow=false }) {
  const sliderRef = useRef(null);

  const Next = () => {
    sliderRef.current?.slickNext();
  };

  const Previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    infinite: true,
    slidesToShow: slides,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: Math.max(slides - 1, 1),
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.max(slides - 2, 1),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.max(slides - 3, 1),
        },
      },
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={`slider-container relative ${className}`}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      <div className={`absolute ${arrow ? '-left-6' : 'left-0'} top-[40%]`}>
       <button className="rounded-[50%] border h-12 md:h-17.75 w-12 md:w-17.75 z-10 bg-white items-center justify-center flex" onClick={Previous} ><MoveLeft className="ptextc" /></button>
      </div>

      <div className={`absolute ${arrow ? '-right-6' : 'right-0'} top-[40%]`}>
        <button className="rounded-[50%] border h-12 md:h-17.75 w-12 md:w-17.75 z-10 bg-white items-center justify-center flex" onClick={Next} ><MoveRight className="ptextc" /></button>
      </div>
    </div>
  );
}

export default Carousel;
