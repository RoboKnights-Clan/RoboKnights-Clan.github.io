/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto md:px-24 flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              RoboKnights
            </h1>
            <p className="mb-8 leading-relaxed">
              The Robotics Club of Delhi Public School R.K. Puram
            </p>
            <div className="flex justify-center">
              <Link href="/resources">
                <a className="inline-flex mr-2 text-black bg-white border-2 border-black py-2 px-12 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg">
                  Resources
                </a>
              </Link>
              <button className="inline-flex mr-2 text-black bg-white border-2 border-black py-2 px-16 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg">
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
      </section>
    </div>
  );
};

export default Hero;
