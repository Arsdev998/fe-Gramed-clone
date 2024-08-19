import CardBook from "@/components/ui/CardBook";
import HeadList from "@/components/ui/head-list";
import { get } from "@/utils/api";
import React, { useEffect, useState } from "react";
import banner from "@/assets/image/bannerpopuler.png";
import { Link } from "react-router-dom";

const PopulerBookList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFiksiFav = async () => {
      const response = await get("/api/book/get-fiksi");
      setData(response);
    };
    fetchFiksiFav();
  }, []);
  return (
    <section className="mt-12 w-[1100px]">
      <HeadList title={"Buku Buku Populer"} href={"/books"} />
      <div className="flex space-x-1">
        <Link to={"/books"}>
          <img src={banner} alt="" />
        </Link>
        <div className="flex gap-5 pl-3">
          {data.map((item) => (
            <CardBook
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.coverUrl}
              author={item.author}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopulerBookList;
