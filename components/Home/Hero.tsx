/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container mx-auto lg:px-24 flex px-5 py-12 md:flex-row flex-col items-center text-dark">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-dark font-sanssm dark:text-white">
          RoboKnights
        </h1>
        <p className="mb-8 leading-relaxed dark:text-g">
          The Robotics Club of Delhi Public School R.K. Puram
        </p>
        <div className="flex justify-center">
          <Link href="/resources">
            <a className="inline-flex mr-2 text-dark dark:text-white bg-white dark:bg-transparent border-2 border-black dark:border-white py-2 px-12 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg font-sansm">
              Resources
            </a>
          </Link>
          <button className="inline-flex mr-2 text-dark bg-white border-2 border-black py-2 px-16 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg font-sansm">
            Blogs
          </button>
        </div>
      </div>
      <div className="md:w-1/2 w-full">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="/images/index_hero.png"
        />
      </div>
    </div>
  );
};

export default Hero;
