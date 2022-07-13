/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout/Layout";

const InductionsPage: NextPage = () => {
  return (
    <Layout title="Inductions 2022">
      <div className="container mx-auto md:px-24 flex px-5 py-12 flex-col text-dark dark:text-white">
        <h1 className="sm:text-4xl text-3xl font-medium mb-1 text-gray-900 dark:text-gray-e9 font-sanssm">
          Inductions'22
        </h1>{" "}
        <h3 className="mt-8 sm:text-xl text-2xl font-semibold">
          RoboKnights, The Robotics Club of DPS RK Puram, is back with its
          annual inductions!
        </h3>
        <div className="flex items-center justify-center">
          <img
            src="/images/inductions_hero.png"
            alt="hero"
            className="lg:w-1/2 my-8 w-full"
          />
        </div>
        <p className="mt-8 sm:text-xl text-2xl">
          Many think that Robotics is limited to those having proficiency in
          creativity and science, while we agree that these skills are helpful,
          and admit that we are looking for them, we also believe that
          enthusiasm and dedication are arguably more important, as they are the
          qualities that inspire learners and make the projects more efficient.
        </p>
        <div className="flex items-center justify-center mt-8">
          <a
            href="https://bit.ly/Roboknights_Inductions"
            className="inline-flex mr-2 cursor-pointer text-dark dark:text-white dark:hover:bg-white dark:hover:text-dark bg-white dark:bg-transparent border-2 border-black dark:border-white py-2 px-8 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg font-sansm"
          >
            Register Now
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default InductionsPage;
