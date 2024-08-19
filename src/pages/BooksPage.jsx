import FilterSide from "@/components/books-page/FilterSide";
import CardBook from "@/components/ui/CardBook";
import Loading from "@/components/ui/Loading";
import { get } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const BooksPage = () => {
  const [searhParams] = useSearchParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchQuery = searhParams.get("search");
  const category = searhParams.get("category");
  useEffect(() => {
    const fetchBooks = async () => {
      const queryParams = new URLSearchParams({
        search: searchQuery || "",
        category: category || "",
      });
      try {
        setLoading(true);
        const response = await get(`/api/book/get?${queryParams.toString()}`);
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    };
    fetchBooks();
  }, [searchQuery, category]);

  return (
    <section className="flex mx-auto py-10 w-[1200px]">
      <div className="">
        <FilterSide />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? <Loading /> :  books.length === 0 ? (
          <p className="text-lg text-gray-500">Maaf, kami tidak menemukan apa yang anda cari</p>
        ) : (
          books.map((book) => (
            <CardBook
              key={book.id}
              id={book.id}
              img={book.coverUrl}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default BooksPage;
