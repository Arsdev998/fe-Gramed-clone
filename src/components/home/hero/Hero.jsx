import React from "react";
import Banner from "./Banner";
import RightBanner from "./RightBanner";
import { Link } from "react-router-dom";
import HightLight from "./HightLight";

const Hero = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mt-[40px] mb-[10px]">
        <Link to={'/'} className="text-red-600 font-semibold">Lihat Semua</Link>
      </div>
      <div className="flex">
        <Banner />
        <RightBanner />
      </div>
      <HightLight/>
    </div>
  );
};

export default Hero;
