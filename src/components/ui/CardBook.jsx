import React from "react";
import PriceDisplay from "./priceidplay";

const CardBook = ({ img, title, price, author }) => {
  return (
    <div className="max-w-[170px]">
      <div className="p-2">
        <img src={img} alt={title} className="w-[130px] h-[200px]" />
      </div>
      <div className="">
        <h2 className="font-light text-gray-600 text-xs cursor-pointer hover:underline">{author}</h2>
        <p className="text-sm">{title}</p>
        <p className="text-sm text-gramed font-bold"><PriceDisplay price={price}/></p>

      </div>
    </div>
  );
};

export default CardBook;
