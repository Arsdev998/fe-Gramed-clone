import React, { useEffect, useState } from "react";
import HeadList from "../ui/head-list";
import { get } from "@/utils/api";
import CardBook from "../ui/CardBook";

const Recomendation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchRecomendation = async () => {
      const response = await get("/api/book/get");
      setData(response.data);
    };
    fetchRecomendation();
  }, []);
  console.log(data);

  return (
    <section className="flex flex-col justify-center items-center w-[1150px] mt-[20px]">
      <HeadList title={"Rekomendasi Gramedia Untukmu"} href={"#"} />
      <div className="w-full justify-center flex gap-x-2">
        {data.map((item) => (
          <CardBook
            key={item.id}
            title={item.title}
            img={item.coverUrl}
            author={item.author}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Recomendation;
