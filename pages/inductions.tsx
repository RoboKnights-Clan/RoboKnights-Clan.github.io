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
          <Link href="https://bit.ly/Roboknights_Inductions" passHref>
            <a className="inline-flex mr-2 text-dark dark:text-white dark:hover:bg-white dark:hover:text-dark bg-white dark:bg-transparent border-2 border-black dark:border-white py-2 px-12 focus:outline-none hover:bg-black hover:text-white transition duration-200 ease-in-out rounded text-lg font-sansm">
              Register Now
            </a>
            </Link>
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
      </div>
      <div className="container mx-auto lg:px-24 px-5 pb-12">
        <h1 className="sm:text-4xl text-2xl mb-4 font-bold text-dark font-sanssm dark:text-white">
          Orientation
        </h1>
        <p className="mb-8 leading-relaxed dark:text-gray-c8">
          The inductions began with an orientation meet conducted on Monday, July 25th 2022, introducing what the club stands for and how one needs to go about this year's inductions. 
        </p>

        <h1 className="sm:text-4xl text-2xl mb-4 font-bold text-dark font-sanssm dark:text-white">
          Round 1
        </h1>
        <p className="mb-8 leading-relaxed dark:text-gray-c8">
        The first round of the induction process will be conducted on Wednesday, 10th August in 2nd floor, CB block. Here are a few guidelines for the same: <br/>
1) Test timings: Reporting time: 1.50 pm; Reading time: 2.00 pm; Writing time: 2.10 pm - 3.35 pm.  <br/>
2) Students have to report to CB block 2nd floor. <br/>
3) Writing space will be provided in the question paper.  <br/>
4) Rough sheets will be provided by invigilator. <br/>
5) Students are supposed to fill the consent form for the stay back using school ID before the induction test, without which you will not be permitted to give the inductions.  <br/>
6) Students are required to bring the signed consent form for stay back before the inductions' paper.  <br/>
7) Result of the test will be published in the classroom. <br/>
        </p>

        <h1 className="sm:text-4xl text-2xl mb-4 font-bold text-dark font-sanssm dark:text-white">
          Creative
        </h1>
        <p className="mb-8 leading-relaxed dark:text-gray-c8">
        The creative inductions are live -new and fresh- just in time for you to put yourself to the test. Anyone can participate: the document attached in the classroom contains all the prompts on the basis of which you can send in your entries. There are various subcategories and you can try for as many of them as you like. Put your best foot forward!
        <br/><br/> All interested participants must submit their entries strictly by 11th August 2022. No plagiarised or late submissions will be entertained.
        </p>
      </div>
    </Layout>
  );
};

export default InductionsPage;
