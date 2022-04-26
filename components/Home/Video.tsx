import React from "react";

const Video = () => {
  return (
    <div className="flex items-center flex-col space-y-8 py-24 justify-center">
      <h1 className="font-medium sm:text-4xl text-3xl text-dark font-sansm">
        Celebrating 20 Years of RK Video
      </h1>
      <iframe
        width="1120"
        height="630"
        src="https://www.youtube.com/embed/LmK33VtXm18"
        title="YouTube video player"
        frameBorder={"0"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
