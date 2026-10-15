import React from "react";
import video from "../assets/videos/video.mp4";

const VideoSection = () => {
  return (
    <div className="relative z-10 w-full h-svh bg-[#EFEAE3] px-3 sm:px-5">
      <video
        className="h-full w-full object-cover rounded-2xl sm:rounded-3xl"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default VideoSection;
