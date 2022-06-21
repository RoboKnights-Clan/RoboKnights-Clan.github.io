// @ts-nocheck

import React from "react";
import Modal from "./Modal";
import { videos } from "../../../data/videos";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Videos = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="py-24">
      <h1 className="font-medium sm:text-4xl text-center text-3xl pb-8 text-dark dark:text-white font-sansm">
        RoboKnights Videos
      </h1>
      <div className="flex flex-col lg:px-24 justify-center pb-12 items-center">
        <img
          src="/images/videos/20_years_of_rk.jpg"
          className="rounded-t-md w-3/4 cursor-pointer"
          alt="thumbnail"
          onClick={() => setOpen(true)}
        />
        <button
          className="bg-black font-bold text-white py-4 w-3/4 text-xl rounded-b-md hover:bg-dark transition duration-200 ease-in-out"
          onClick={() => setOpen(true)}
        >
          20 Years of RoboKnights
        </button>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="Eeq6bW3pbOI"
          onClose={() => setOpen(false)}
        />
      </div>
      <div className="-m-2 lg:grid flex flex-col grid-cols-2 lg:pl-24">
        {videos.map((video, index) => (
          <div key={index} className="p-5">
            <Modal
              videoId={video.videoId}
              image={video.image}
              name={video.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
