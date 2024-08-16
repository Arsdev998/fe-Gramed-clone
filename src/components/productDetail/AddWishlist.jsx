import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { CiBookmarkPlus, CiBookmarkCheck } from "react-icons/ci";
import {
  postWishlist,
  deleteWishlist,
  getWishlist,
} from "@/features/wishlistSlice";

const AddWishlist = ({ bookId }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { wishlist } = useSelector((state) => state.wishlist);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    // Pastikan wishlist adalah array
    if (Array.isArray(wishlist)) {
      if (wishlist.some((item) => item.bookId === bookId)) {
        setIsInWishlist(true);
      } else {
        setIsInWishlist(false);
      }
    }
  }, [wishlist, bookId]);

  const handleWishlist = () => {
    if (isInWishlist) {
      const wishlistItem = wishlist.find((item) => item.bookId === bookId);
      dispatch(deleteWishlist(wishlistItem.id));
      setIsInWishlist(false);
    } else {
      dispatch(postWishlist({ userId: user.id, bookId }));
      setIsInWishlist(true);
    }
  };

  return (
    <Button onClick={handleWishlist} variant="ghost" size="icon">
      {isInWishlist ? (
        <CiBookmarkCheck className="text-2xl text-gramed" />
      ) : (
        <CiBookmarkPlus className="text-2xl" />
      )}
    </Button>
  );
};

export default AddWishlist;
