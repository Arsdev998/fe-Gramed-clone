import { get } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useSearchParams } from "react-router-dom";

const FilterSide = () => {
  const [category, setCategory] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await get("/api/category/get");
      setCategory(response.data);
    };
    fetchCategory();
  }, []);

  const handleFilter = (categoryName) => {
    searchParams.set("category", categoryName);
    setSearchParams(searchParams);
  };

  return (
    <div className="w-[300px] ">
      <h2 className="text-2xl font-semibold mb-2">Filter</h2>
      <div className="">
        <h3 className="text-lg font-medium">Kategory</h3>
        <div className="flex flex-col gap-4">
          <ul>
            {category.map((item) => (
              <li key={item.id} onClick={() => handleFilter(item.name)} className="cursor-pointer">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
