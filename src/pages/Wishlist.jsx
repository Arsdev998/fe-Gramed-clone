import WishlistNotfound from "@/components/accountPage/WishlistNotfound";
import CardBook from "@/components/ui/CardBook";
import Loading from "@/components/ui/Loading";
import { getById } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const userId = user?.id;
  console.log(user);

  useEffect(() => {
    const fetchWishllist = async () => {
      try {
        const response = await getById("/api/book/wishlist/get/" + userId);
        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchWishllist();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {data?.length > 0 ? (
        <div className="flex gap-3 flex-wrap w-[500px]">
          {data.map((book) => (
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
         <WishlistNotfound/>
        </p>
      )}
    </div>
  );
};

export default Wishlist;
