"use client";

import HeroCarousel from "@/components/HeroCarousel";
import { SearchBar } from "@/components/SearchBar";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2  border-red-500">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Never want to miss a price drop or a restock again? Start here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="right arrow"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unlock the power of
              <span className="text-primary"> NotifyMe</span>
            </h1>
            <p className="mt-6">
              Powerful, self-service product that allows you to take control of
              your shopping needs.
            </p>
            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {["Apple Iphone", "Book", "Sneakers"].map((product, index) => (
            <div key={index}> {product}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
