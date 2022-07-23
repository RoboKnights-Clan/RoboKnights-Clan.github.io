/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import React from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";

const InductionsPage: NextPage = () => {
  return (
    <Layout title="Inductions 2022">
      <div className="container mx-auto lg:px-24 flex px-5 py-12 md:flex-row flex-col items-center text-dark">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-dark font-sanssm dark:text-white">
            Overview
          </h1>
          <p className="mb-8 text-gray-600 leading-relaxed dark:text-gray-c8">
            RoboKnights is back with its annual induction process, this time
            even more INTERESTING!
          </p>
          <p className="mb-8 leading-relaxed dark:text-gray-c8">
            Many think that Robotics is limited to those having proficiency in
            creativity and science, while we agree that these skills are
            helpful, and admit that we are looking for them, we also believe
            that enthusiasm and dedication are arguably more important, as they
            are the qualities that inspire learners and make the projects more
            efficient. This year’s inductions will not require any prerequisites
            apart from a very small percentage from the resources provided
            below. An orientation session will be held to acquaint the students
            about the same.
          </p>
          <div className="flex justify-center">
            <a className="inline-flex mr-2 text-dark dark:text-white dark:hover:bg-white dark:hover:text-dark bg-white dark:bg-transparent border-2 border-black dark:border-white py-2 px-12 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg font-sansm">
              Register Now
            </a>
            <Link href="/resources" passHref>
              <a className="inline-flex mr-2 text-dark dark:text-white dark:hover:bg-white dark:hover:text-dark bg-white dark:bg-transparent border-2 border-black dark:border-white py-2 px-16 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg font-sansm">
                Resources
              </a>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/hero.png"
          />
        </div>
      </div>
      <div className="container mx-auto lg:px-24 px-5 py-12">
        <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-dark font-sanssm dark:text-white">
          Updates
        </h1>
        <p className="mb-8 leading-relaxed dark:text-gray-c8">
          Keep checking and reloading this page to stay updated with the
          inductions.
        </p>
        <p className="mb-8 leading-relaxed dark:text-gray-c8">
          Coming Soon....
        </p>
      </div>
      <div className="container mx-auto lg:px-24 px-5 py-12">
        <h1 className="sm:text-5xl text-3xl mb-4 font-bold text-dark font-sanssm dark:text-white">
          Orientation
        </h1>
        <p className="mb-8 leading-relaxed dark:text-gray-c8">
        We know that all of you are extremely curious and excited to give this year's inductions and become a member of RoboKnights.
We will be commencing the inductions with an orientation meet conducted on Monday, 
the timings and link for which will be shared in the classroom.
We hope to see you all there as we will be introducing you with what the club stands for and how one needs to
go about this year's inductions. 

        </p>
      </div>
    </Layout>
  );
};

export default InductionsPage;
