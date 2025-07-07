import React from 'react';
import video from '../assets/videos/video.mp4';

const VideoSection = () => {
  return (
    <div className="z-10  bg-[#EFEAE3] w-full p-5 overflow-hidden ">
      <video
        className="h-[500px] rounded-3xl w-full max-w-full object-cover"
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
