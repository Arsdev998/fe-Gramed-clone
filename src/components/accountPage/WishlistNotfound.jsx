import React from "react";
import img from "@/assets/image/wishlist-empty.png";
const WishlistNotfound = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[400px] mx-auto">
      <img src={img} alt="" />
      <p className="text-gray-500 text-xl font-semibold">
        Anda belum mempunyai Wishlist
      </p>
    </div>
  );
};

export default WishlistNotfound;
