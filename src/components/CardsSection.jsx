import React from "react";
import Card from "./Card";
import Nike from '../assets/images/Nike.svg';
import Converse from '../assets/images/Converse.svg';
import ArcTery from '../assets/images/ArcTery.svg';
import Hunter from '../assets/images/Hunter.svg';
import North from '../assets/images/North.png';

const CardsSection = () => {
  return (
    <div className="relative w-full mb-100 overflow-x-auto scrollbar-hide z-10 bg-[#EFEAE3]">
      <div className="flex gap-6 px-4 py-6 w-max justify-end">
        <Card image={Nike} />
        <Card image={Converse} />
        <Card image={ArcTery} />
        <Card image={Hunter} />
        <Card image={North} />
      </div>
    </div>
  );
};

export default CardsSection;
