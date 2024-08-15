import React, { useEffect, useState } from "react";
import HeadList from "@/components/ui/head-list";
import CardBook from "@/components/ui/CardBook";
import { get } from "@/utils/api";

const Recomendation = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchRecomendation = async () => {
      const response = await get("/api/book/getRecomendation");
      setData(response);
    };
    fetchRecomendation();
  }, []);
  console.log(data);

  return (
    <section className="flex flex-col justify-center items-center w-[1150px] mt-[20px]">
      <HeadList title={"Rekomendasi Gramedia Untukmu"} href={"#"} />
      <div className="w-full justify-center flex gap-x-4">
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
