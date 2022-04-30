/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout/Layout";
import { about } from "../data/about";

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="container mx-auto md:px-24 flex px-5 py-12 md:flex-row flex-col items-center text-dark dark:text-white">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" sm:text-4xl text-3xl mb-4 font-bold text-dark dark:text-white">
            About
          </h1>
          <p className="mb-8 leading-relaxed text-justify font-sansl">
            RoboKnights, founded in 2002, is the Robotics Club of DPS R. K.
            Puram, and one of the well known robotics clubs in India. The club
            strives to stimulate interest in robotics among the high school
            students. It caters to those who showcase unique creativity and
            curiosity to learn new things. Today the club is an active platform
            for engineering aficionados to display and hone their practical
            skills and knowledge about engineering and technology. Under the
            mentorship of Mr. KG Ajithkumar, the members of RoboKnights
            participate and win competitions at regional, national and
            international levels consistently. The club also boasts an extensive
            alumni network at numerous MNCs and top-universities all around the
            world. Our motto, <span className="font-sanssm">"Curiosity is the key to Creativity"</span> speaks
            volumes about our objective and love for technology.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/about_hero.png"
          />
        </div>
      </div>
      <div className="container mx-auto md:px-24 flex px-5 py-12 flex-col items-center">
        {about.map((item, index) => (
          <div className="border-2 border-black dark:border-gray-400 mb-4 rounded-md" key={index}>
            <div className="container mx-auto md:px-24 flex px-5 py-12 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className=" sm:text-2xl text-xl mb-2 font-bold text-dark dark:text-gray-e9">
                  {item.name}
                </h1>
                <h1 className=" sm:text-xl text-lg mb-4 font-medium text-gray-cb dark:text-gray-300 dark:text-grey">
                  {item.role}
                </h1>
                <p className="mb-8 leading-relaxed text-justify text-dark dark:text-gray-e9 font-sansl">{item.desc}</p>
              </div>
              <div className="w-72">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={item.image}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default AboutPage;
