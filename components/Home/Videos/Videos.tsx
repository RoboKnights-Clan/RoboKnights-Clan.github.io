import React from "react";
import Modal from "./Modal";
import { videos } from "../../../data/videos";

const Videos = () => {
  return (
    <div className="py-24">
      <h1 className="font-medium sm:text-4xl text-center text-3xl pb-8 text-dark dark:text-white font-sansm">
        RoboKnights Videos
      </h1>
      <div className="lg:grid lg:grid-cols-2 flex-col lg:space-x-2 px-5 space-y-2 lg:px-24">
        {videos.map((video, index) => (
          <Modal
            key={index}
            videoId={video.videoId}
            image={video.image}
            name={video.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
