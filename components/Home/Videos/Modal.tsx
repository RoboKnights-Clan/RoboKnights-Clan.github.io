// @ts-nocheck

import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });

const Modal = ({ videoId, image, name }) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <img src={image} className="rounded-t-md" alt="thumbnail" />
      <button
        className="bg-black font-bold text-white py-4 w-full text-xl rounded-b-md"
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
