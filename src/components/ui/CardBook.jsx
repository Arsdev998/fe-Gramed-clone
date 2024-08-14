import React from "react";
import PriceDisplay from "./priceidplay";
import { Link } from "react-router-dom";

const CardBook = ({ img, title, price, author ,id}) => {
  return (
    <div className="max-w-[170px]">
      <Link to={`/product/${id}`}>
        <div className="p-2">
          <img src={img} alt={title} className="w-[130px] h-[200px]" />
        </div>
        <div className="">
          <h2 className="font-light text-gray-600 text-xs cursor-pointer hover:underline">
            {author}
          </h2>
          <p className="text-sm">{title}</p>
          <p className="text-sm text-gramed font-bold">
            {price.toLocaleString("id-ID")}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardBook;
