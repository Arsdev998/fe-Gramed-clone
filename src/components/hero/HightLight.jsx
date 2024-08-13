import { dataHightlight } from "@/assets/data/highlight";
import React from "react";
import { Link } from "react-router-dom";

const HightLight = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap  justify-center md:justify-between gap-x-5 mt-2">
      {dataHightlight.map((item, index) => (
        <Link key={index} to={item.href} className="w-[80px] md:w-[130px]">
          <div className="flex flex-col items-center">
            <img src={item.image} alt="" />
            <p className="text-sm md:text-lg text-center font-semibold text-gray-700 leading-none">{item.label}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HightLight;
