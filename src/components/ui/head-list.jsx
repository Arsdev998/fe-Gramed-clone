import React from "react";
import { Link } from "react-router-dom";

const HeadList = ({ title, href }) => {
  return (
    <div className="flex justify-between w-full my-5">
      <h2 className="text-2xl font-bold">{title}</h2>
      <Link to={href} className="text-gramed ">
        Lihat Semua
      </Link>
    </div>
  );
};

export default HeadList;
