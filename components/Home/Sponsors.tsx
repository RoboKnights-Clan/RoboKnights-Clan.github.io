/* eslint-disable @next/next/no-img-element */
import React from "react";

const Sponsors = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Powered By
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <img src="/images/plaksha.png" alt="plaksha" />
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <img src="/images/vrt.png" alt="vrt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
