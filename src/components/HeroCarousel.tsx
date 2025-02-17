"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const images = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair" },
];

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={2000}
      showArrows={false}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <Image
            src={image.imgUrl}
            alt={image.alt}
            width={384}
            height={384}
            className="object-contain"
            key={image.alt}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
