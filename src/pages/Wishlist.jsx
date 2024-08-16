import WishlistNotfound from "@/components/accountPage/WishlistNotfound";
import CardBook from "@/components/ui/CardBook";
import Loading from "@/components/ui/Loading";
import { getWishlist } from "@/features/wishlistSlice";
import { getById } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const {  wishlist , isLoading} = useSelector((state) => state.wishlist);
  const { user } = useSelector((state) => state.auth);
  const userId = user?.id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWishlist(userId));
  }, [userId, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {wishlist?.length > 0 ? (
        <div className="flex gap-3 flex-wrap w-[700px]">
          {wishlist.map((book) => (
            <CardBook
              key={book?.id}
              img={book?.book.coverUrl}
              title={book?.book.title}
              price={book?.book.price}
              author={book?.book.author}
              id={book?.book.id}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 font-semibold">
          <WishlistNotfound />
        </p>
      )}
    </div>
  );
};

export default Wishlist;
