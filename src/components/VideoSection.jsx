import React from "react";
import video from "../assets/videos/video.mp4";

const VideoSection = () => {
  return (
    <div className="relative z-10 bg-[#EFEAE3] w-full p-3 sm:p-5 overflow-hidden">
      <video
        className="
          w-full max-w-full rounded-2xl sm:rounded-3xl object-cover
          h-48 sm:h-72 md:h-[400px] lg:h-[500px]
        "
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
