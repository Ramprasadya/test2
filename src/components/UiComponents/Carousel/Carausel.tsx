"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MoveLeft, MoveRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}

function Carousel({
  children,
  className = "xsm:mx-10 sm:mx-20",
  arrow = true,
}: CarouselProps) {
  const sliderRef = useRef<Slider>(null);

  const Next = () => sliderRef.current?.slickNext();
  const Previous = () => sliderRef.current?.slickPrev();

  const settings = {
    infinite: true,
    swipeToSlide: true,
    variableWidth: true,
    arrows: false,
    centerMode:false
  };

  return (
    <div className={`relative ${className}`}>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      {arrow && (
        <>
          <button
            onClick={Previous}
            className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 hidden 
            h-12 w-12 rounded-full bg-white text-[#3fa72a] border xsm:flex items-center justify-center shadow"
          >
            <MoveLeft />
          </button>

          <button
            onClick={Next}
            className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden
            h-12 w-12 rounded-full bg-white text-[#3fa72a] border xsm:flex items-center justify-center shadow"
          >
            <MoveRight />
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;
