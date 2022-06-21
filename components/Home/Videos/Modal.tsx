// @ts-nocheck

import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Modal = ({ videoId, image, name }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <img
        src={image}
        className="rounded-t-md lg:w-3/4 w-full cursor-pointer"
        alt="thumbnail"
        onClick={() => setOpen(true)}
      />
      <button
        className="bg-black font-bold text-white py-4 w-3/4 text-xl rounded-b-md hover:bg-dark transition duration-200 ease-in-out"
        onClick={() => setOpen(true)}
      >
        {name}
      </button>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default Modal;
